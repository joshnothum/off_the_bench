var express = require('express');
var router = express.Router();
require('dotenv').config();
var request = require('request');
var pool = require('pool.js');



const fs = require('fs');
API_KEY = process.env.API_KEY;


places.get('/', function (req, res) {

    req.query.key = API_KEY;
    request('https://maps.googleapis.com/maps/api/photo?', { qs: req.query }, function (error, response, body) {

    console.log(body);
    
        res.send(body);
    });

});//end of places.get