var express = require('express');
var places = express.Router();
var path = require('path');
var pool = require('../modules/pool.js');
require('dotenv').config();
var request = require('request');




let newPlace = '';
API_KEY = process.env.API_KEY;


places.get('/', function (req, res) {
    console.log(req.query);
    req.query.key = API_KEY;
    request('https://maps.googleapis.com/maps/api/place/textsearch/json?',{qs: req.query}, function (error, response, body) {
     // Print the HTML for the Google homepage.
        console.log(error);
        console.log(body);
        
        
    res.send(body);
   
    
});

});//end of places.get


places.get('/info', function (req, res) {
    console.log(req.query);
    req.query.key = API_KEY;
    request('https://maps.googleapis.com/maps/api/place/details/json?', { qs: req.query }, function (error, response, body) {
        // Print the HTML for the Google homepage.
        console.log(error);
        console.log(body);
        
        
        res.send(body);
    });
});//end of places.get(/info)


places.post('/', function (req, res) {
        console.log('here line 45',req.body);
        pool.connect(function (err, client, done) {
            if (err) {
                console.log("Error connecting: ", err);
                res.sendStatus(500);
            }
            let saveGame = {
                creator_id: req.body.creator_id,
                time: req.body.time,
                date: req.body.date,
                max_number: req.body.maxNumber,
                location: req.body.location,
                place_id: req.body.place_id,
                name: req.body.name
            };
            console.log('here on line 60',saveGame);
            
            client.query("INSERT INTO games (creator_id, time, date, max_number, location, place_id, name) VALUES ($1, $2, $3, $4, $5, $6, $7)",
                [saveGame.creator_id,saveGame.time, saveGame.date, saveGame.max_number, saveGame.location, saveGame.place_id, saveGame.name],
                function (err, result) {
                    client.end();

                    if (err) {
                        console.log("Error inserting data: ", err);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(200);
                    }
                });
        });
});


places.post('/locations', function (req, res) {
    console.log('here line 81', req.body);
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        let saveLocation = {
            name: req.body.name,
            location: req.body.location,
            geometry: req.body.geometry,
            url: req.body.url,
            phone: req.body.phone,
            place_id: req.body.place_id,
        };
        console.log('here on line 60', saveGame);

        client.query("INSERT INTO games (creator_id, time, date, max_number, location, place_id, name) VALUES ($1, $2, $3, $4, $5, $6, $7)",
            [saveGame.creator_id, saveGame.time, saveGame.date, saveGame.max_number, saveGame.location, saveGame.place_id, saveGame.name],
            function (err, result) {
                client.end();

                if (err) {
                    console.log("Error inserting data: ", err);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(200);
                }
            });
    });
});

module.exports = places;