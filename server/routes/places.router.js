var express = require('express');
var places = express.Router();
require('dotenv').config();
var request = require('request');





API_KEY = process.env.API_KEY;

router.get('/places', function (req, res) {
    console.log('https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&key=' + API_KEY);
    request('https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&key=' + API_KEY), function (error, response, body) {

    console.log(error);
    console.log(response);
    console.log(body);
    
    
    
};
});
module.exports = places;