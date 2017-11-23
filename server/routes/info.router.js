var express = require('express');
var info = express.Router();
var passport = require('passport');
var pool = require('../modules/pool.js');
var path = require('path');



info.get('/', function (req, res, next) {

    
    

    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        client.query('SELECT * FROM "games" WHERE "creator_id" = 2',
            
            function (err, result) {
                client.end();

                if (err) {
                    console.log("Error getting data: ", err);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }//end of else
            });// end of if function
    });//end of pool
    
});//end of get

module.exports = info;