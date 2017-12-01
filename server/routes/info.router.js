var express = require('express');
var info = express.Router();
var passport = require('passport');
var pool = require('../modules/pool.js');
var path = require('path');

info.get('/user', function (req, res, next) {
    let user = req.user;
    console.log('9', user);
    //for userGames
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        
        let queryText = 'SELECT "games"."id", "games"."name", "games"."time", "games"."date", "games"."formatted_address", "games"."place_id", COUNT("player_joins"."game_id") FROM "games" JOIN "player_joins" ON "games"."id" = "player_joins"."game_id" WHERE "games"."creator_id" = $1 OR "player_joins"."player_id" = $1 GROUP BY "games"."id";';
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
    //for browse Games
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }

        let queryText = 'SELECT "games"."id", "games"."name", "games"."time","games"."date","games"."formatted_address", "games"."place_id", "games"."max_number","player_joins"."player_id", COUNT("player_joins"."game_id") FROM "games" JOIN "player_joins" ON "games"."id" = "player_joins"."game_id" GROUP BY "games"."id", "player_joins"."player_id";';
        client.query(queryText,

            function (err, result) {
                client.end();

                if (err) {
                    console.log("Error getting data: ", err);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);

                    //ted stuff
                    //if(result.rows.length == 0){
                        //insert into table
                    //}
                    //else {
                        //cant play the game, you already have. 
                    //}
                }//end of else
            });// end of if function
    });//end of pool
});//end of get
// info.get('/location', function (req, res, next) {

//     pool.connect(function (err, client, done) {
//         if (err) {
//             console.log("Error connecting: ", err);
//             res.sendStatus(500);
//         }
//         client.query('SELECT * FROM "locations"',

//             function (err, result) {
//                 client.end();

//                 if (err) {
//                     console.log("Error getting data: ", err);
//                     res.sendStatus(500);
//                 } else {
//                     res.send(result.rows);
//                 }//end of else
//             });// end of if function
//     });//end of pool
// });//end of get
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

    info.get('/getGameByID/:gid', function (req, res, next) {
        //for games.html
        
        let getGame = req.params.gid;
        let user = req.user.id;
        pool.connect(function (err, client, done) {
            if (err) {
                console.log("Error connecting: ", err);
                res.sendStatus(500);
            }
            let queryText = 'SELECT "games"."id", "games"."name", "games"."time","games"."date","games"."formatted_address", "games"."place_id", "games"."max_number","users"."username" , "player_joins"."player_id", COUNT("player_joins"."game_id") FROM "users" JOIN "player_joins" ON "users"."id" = "player_joins"."player_id" JOIN "games" ON "games"."id" = "player_joins"."game_id" WHERE "games"."id" = $1 GROUP BY "games"."id", "player_joins"."player_id", "users"."username";';
            client.query( queryText,[getGame],

                function (err, result) {
                   done();

                    if (err) {
                        console.log("Error getting data: ", err);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }//end of else
                });// end of if function
        });//end of pool
    });//end of get gameInfo

    
info.delete('/:pid', function (req, res, next) {
    console.log(req.params.pid);
    pool.connect(function (err, client, done) {
        
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        let unJoinGame = {
            game_id: req.params.pid,
            player_id: req.user.id
        };// end of UnjoinGame

        console.log(unJoinGame);
        let queryText ='DELETE FROM "player_joins" WHERE "player_joins"."game_id" = $1 AND "player_joins"."player_id" = $2;';


        client.query( queryText,
            [unJoinGame.game_id, unJoinGame.player_id],
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

