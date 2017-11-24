var express = require('express');
var info = express.Router();
var passport = require('passport');
var pool = require('../modules/pool.js');
var path = require('path');

info.get('/user', function (req, res, next) {
    let user = req.user;
    console.log('9', user);
    
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        let queryText = 'SELECT * FROM "games" WHERE "creator_id" = $1;';
        client.query(queryText,[user.id],

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

info.get('/', function (req, res, next) {

    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        client.query('SELECT * FROM "games"',

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

info.get('/location', function (req, res, next) {

    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        client.query('SELECT * FROM "locations"',

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
info.post('/', function (req, res) {

    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        let joinGame = {
            game_id:req.body.game_id,
            player_id: req.user.id
        };// end of saveGame
    
        client.query("INSERT INTO player_joins (game_id, player_id) VALUES ($1, $2)",
            [joinGame.game_id, joinGame.player_id],
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

module.exports = info;