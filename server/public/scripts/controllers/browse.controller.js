myApp.controller('BrowseController', function ($scope, $mdDialog, GameService, $http, $location, UserService) {
    UserService.browseGames();
    console.log('browsing is easy now!');
    let browse = this;

    browse.gamesObject = UserService.browseGamesObject;

    browse.getInfo = function (place) {


        MapService.getGameInfo(place);
  
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