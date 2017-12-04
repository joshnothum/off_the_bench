
myApp.controller('BrowseController', function ($scope, $mdDialog, GameService, $http, $location, UserService, MapService, $uibModal) {
    GameService.browseGames();
    console.log('browsing is easy now!');
    let browse = this;

    browse.gamesObject = GameService.browseGamesObject;

    browse.getMoreGameInfo = function (games) {

        //game =place_id that can be used to join games table and locations table
        console.log(games);
        let gameID = games.id;
        GameService.getGameInfo(games, gameID);

    };//end of getMoreGameInfo
    browse.joinGame = function (game_id) {
        console.log(game_id);

        let playerJoin = {
            gameid: game_id
        };// end of playerJoin object
        GameService.joinGame(playerJoin);
    };


    browse.sendToMoment = function (time) {
        moment(time).format('HH:MM');

        return time;

    };






});