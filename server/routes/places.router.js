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

places.get('/photo', function (req, res) {

    req.query.key = API_KEY;
    console.log(req.query);


    request('https://maps.googleapis.com/maps/api/place/photo?', { qs: req.query }, function (error, response, body) {
        //res.send('photos/' + req.query.photoreference + '.png');
        console.log(error);
        res.sendFile(path.join(__dirname, '../public/photos/' + req.query.photoreference + '.png'));
        //console.log(response);

    }).pipe(fs.createWriteStream('server/public/photos/' + req.query.photoreference + '.png'));

});






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
            creator_id: req.user.id,
            name: req.body.newLocation.name,
            formatted_address: req.body.newLocation.formatted_address,
            lat: req.body.newLocation.lat,
            lng: req.body.newLocation.lng,
            url: req.body.newLocation.url,
            phone: req.body.newLocation.phone,
            place_id: req.body.newLocation.place_id,

        };

        let saveCourt = {
            indoor: req.body.courtInfo.indoor,
            lights: req.body.courtInfo.lights,
            surface: req.body.courtInfo.surface,
            size: req.body.courtInfo.size,
            rating: req.body.courtInfo.size,
        };
        // let savePhotos = {
        //     photo_reference: req.body.photos.photo_reference,
        // };
        let querytText = "INSERT INTO 'locations' (creator_id, name, formatted_address, lat, lng, url, phone, place_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING 'id' ;";
        client.query(queryText,
            [saveLocation.creator_id, saveLocation.name, saveLocation.formatted_address, saveLocation.lat, saveLocation.lng, saveLocation.url, saveLocation.phone, saveLocation.place_id],
            function (err, result) {
                client.end();

                if (err) {
                    console.log("Error inserting data into locations: ", err);
                    res.sendStatus(500);
                } else {
                    let courtQuerytText = "INSERT INTO 'courts' (indoor, lights, surface, size, rating, location_id) VALUES ($1, $2, $3, $4, $5);";
                    let location_id = result.rows[0].id;

                    client.query(courtQueryText,
                        [saveCourt.indoor, saveCourt.lights, saveCourt.surface, saveCourt.size, location_id],
                        function (err, result) {
                            client.end();

                            if (err) {
                                console.log("Error inserting data into courts: ", err);
                                res.sendStatus(500);
                            } else {
                                res.sendStatus(201);
                            }
                        });
                }
            });
        res.send(req.body);
    });//end of places.post(/locations)
});

module.exports = places;