myApp.controller('BrowseController', function ($scope, $mdDialog, GameService, $http, $location, UserService, MapService) {
    GameService.browseGames();
    console.log('browsing is easy now!');
    let browse = this;

    browse.gamesObject = GameService.browseGamesObject;

    browse.getGameInfo = function (game) {

        //game =place_id that can be used to join games table and locations table
        
        GameService.getGameInfo(game.id);
        $location.path('/games');
    };//end of getInfo

    browse.joinGame = function (game_id) {
        console.log(game_id);
        
        let playerJoin = {
            gameid: game_id
        };// end of playerJoin object
        GameService.joinGame(playerJoin);
    };
});