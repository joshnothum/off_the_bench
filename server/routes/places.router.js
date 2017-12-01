var express = require('express');
var places = express.Router();
var path = require('path');
var pool = require('../modules/pool.js');
require('dotenv').config();
var request = require('request');
let newPlace = '';
const fs = require('fs');
API_KEY = process.env.API_KEY;


places.get('/', function (req, res) {

    req.query.key = API_KEY;
    request('https://maps.googleapis.com/maps/api/place/textsearch/json?', { qs: req.query }, function (error, response, body) {
        res.send(body);
    });

});//end of places.get

places.get('/locationDetail', function (req, res) {
    req.query.key = API_KEY;
    request('https://maps.googleapis.com/maps/api/place/details/json?', { qs: req.query }, function (error, response, body) {




        res.send(body);
    });
});//end of places.get(/info)

// places.get('/photo', function (req, res) {

//     req.query.key = API_KEY;
//     console.log(req.query);


//     request('https://maps.googleapis.com/maps/api/place/photo?', { qs: req.query }, function (error, response, body) {
//         //res.send('photos/' + req.query.photoreference + '.png');
//         console.log(error);
//         res.sendFile(path.join(__dirname, '../public/photos/' + req.query.photoreference + '.png'));
//         //console.log(response);

//     }).pipe(fs.createWriteStream('server/public/photos/' + req.query.photoreference + '.png'));

// });






places.post('/', function (req, res) {

    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        let saveGame = {
            creator_id: req.user.id,
            time: req.body.time,
            date: req.body.date,
            max_number: req.body.maxNumber,
            formatted_address: req.body.formatted_address,
            place_id: req.body.place_id,
            name: req.body.name
        };// end of saveGame
console.log(saveGame);

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
            console.log("Error connecting on 89: ", err);
            res.sendStatus(500);
        }
        console.log('we are here',req.body);
        
        let saveLocation = {
            creator_id: req.user.id,
            name: req.body.name,
            formatted_address: req.body.formatted_address,
            lat: req.body.lat,
            lng: req.body.lng,
            url: req.body.url,
            phone: req.body.formatted_phone_number,
            place_id: req.body.place_id,
        };
        // let addToCourt  = req.body.courtInfo;

        let saveCourt = {
            indoor: req.body.indoor,
            lights: req.body.lights,
            surface: req.body.surface,
            size: req.body.size,
        };
        // let savePhotos = {
        //     photo_reference: req.body.photos.photo_reference,
        // };
        let queryText = 'INSERT INTO "locations" (creator_id, name, formatted_address, lat, lng, url, phone, place_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING "id" ;';
        client.query(queryText,
            [saveLocation.creator_id, saveLocation.name, saveLocation.formatted_address, saveLocation.lat, saveLocation.lng, saveLocation.url, saveLocation.phone, saveLocation.place_id],
            function (err, result) {
                done();

                if (err) {
                    console.log("Error inserting data into locations: ", err);
                    res.sendStatus(500);
                    
                } else {
                    let courtQueryText = 'INSERT INTO "courts" (indoor, lights, surface, size, location_id) VALUES ($1, $2, $3, $4, $5);';
                    
                    console.log(result.rows[0].id);
                    console.log(courtQueryText);
                    
                    client.query(courtQueryText,
                        [saveCourt.indoor, saveCourt.lights, saveCourt.surface, saveCourt.size, result.rows[0].id],
                        function (err, result) {
                       done();

                            if (err) {
                                console.log("Error inserting data into courts: ", err);
                                res.sendStatus(500);
                            } else {
                                res.sendStatus(201);
                            }
                        });
                }
            });//end of total Query
    });
});

module.exports = places;