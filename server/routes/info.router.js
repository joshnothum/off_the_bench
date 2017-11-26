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
        // let queryText = 'SELECT * FROM "games" LEFT JOIN "player_joins" ON "games"."id" = "player_joins"."game_id" WHERE "games"."creator_id" = $1 OR "player_joins"."creator_id" = $1;';
        // let queryText = 'SELECT * FROM "games" JOIN "player_joins" ON "games"."id" = "player_joins"."game_id" WHERE (("player_joins"."player_id" =$1 AND "games"."creator_id" != $1") OR ("player_joins"."player_id" !=$1 AND "games"."creator_id" != $1"));';
        let queryText = 'SELECT * FROM "games" JOIN "player_joins" ON "games"."id" = "player_joins"."game_id" WHERE "games"."creator_id" = $1 OR "player_joins"."player_id" = $1;';
        client.query(queryText,[user.id],

            function (err, result) {
                client.end();

                if (err) {
                    console.log("Error getting data: ", err);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                    console.log(result.rows);
                    
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
            game_id: req.body.gameid,
            player_id: req.user.id
        };// end of joinGame
    
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

