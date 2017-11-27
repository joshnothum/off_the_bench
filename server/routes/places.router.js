var express = require('express');
var places = express.Router();
var path = require('path');
var pool = require('../modules/pool.js');
require('dotenv').config();
var request = require('request');
let newPlace = '';
API_KEY = process.env.API_KEY;


places.get('/', function (req, res) {

    req.query.key = API_KEY;
    request('https://maps.googleapis.com/maps/api/place/textsearch/json?', { qs: req.query }, function (error, response, body) {
        res.send(body);
    });

});//end of places.get

places.get('/info', function (req, res) {
    req.query.key = API_KEY;
    request('https://maps.googleapis.com/maps/api/place/details/json?', { qs: req.query }, function (error, response, body) {
        
        console.log('this was an error made by anyone else but me:', error);
        
        
        res.send(body);
    });
});//end of places.get(/info)


places.get('/maps', function (req, res) {
    console.log(req.query);
    


    
    
    req.query.key = API_KEY;
  
    
    request('https://maps.googleapis.com/maps/api/staticmap?',{qs:req.query}, function (error, response, body) {
        // static map 
       
        res.send(response);
        console.log(error);
      
        
        
        
      
        
        
    });
});//end of places.get(/maps)
places.post('/', function (req, res) {

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
            formatted_address: req.body.formatted_address,
            place_id: req.body.place_id,
            name: req.body.name
        };// end of saveGame

        client.query("INSERT INTO games (creator_id, time, date, max_number, formatted_address, place_id, name) VALUES ($1, $2, $3, $4, $5, $6, $7)",
            [saveGame.creator_id, saveGame.time, saveGame.date, saveGame.max_number, saveGame.formatted_address, saveGame.place_id, saveGame.name],
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
});//end of places.post(/)


places.post('/locations', function (req, res) {
    console.log('here line 81', req.body);
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        let saveLocation = {
            creator_id: req.body.creator_id,
            name: req.body.name,
            formatted_address: req.body.formatted_address,
            lat: req.body.lat,
            lng: req.body.lng,
            url: req.body.url,
            phone: req.body.phone,
            place_id: req.body.place_id,
        };//end of saveLocation

        client.query("INSERT INTO locations (creator_id, name, formatted_address, lat, lng, url, phone, place_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
            [saveLocation.creator_id, saveLocation.name, saveLocation.formatted_address, saveLocation.lat, saveLocation.lng, saveLocation.url, saveLocation.phone, saveLocation.place_id],
            function (err, result) {
                client.end();

                if (err) {
                    console.log("Error inserting data into locations: ", err);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(200);
                }
            });
    });
});//end of places.post(/locations)

module.exports = places;