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
        
    res.send(body);
   
    
});

});


places.get('/info', function (req, res) {
    console.log(req.query);
    req.query.key = API_KEY;
    request('https://maps.googleapis.com/maps/api/place/details/json?', { qs: req.query }, function (error, response, body) {
        // Print the HTML for the Google homepage.
        console.log(error);
        console.log(body);
        
        
        res.send(body);
    });
});
// places.get('/', function (req, res) {
//     console.log('https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&key=' + API_KEY);
//     request('https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&key=' + API_KEY), function (error, response, body) {
//     let info = JSON.parse(body);
//         console.log(error);
//         console.log(response);
//         console.log(body);
//         console.log(info);
        
//     res.sendStatus(418);


//     };

module.exports = places;