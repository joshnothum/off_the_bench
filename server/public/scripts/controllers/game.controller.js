myApp.controller('GameController', function (UserService, GameService, $http, $location, MapService) {
    console.log('GameController created');
    var gc = this;
    us = UserService;
    gc.gameInformation = MapService.gameInfo;

    gc.joinGame = function (gameInfo) {
        console.log(gameInfo);

        let playerJoin = {
            gameid: gameInfo
        };// end of playerJoin object

        GameService.joinGame(playerJoin);

    };

    gc.getGameInfoNumber = function (gameInfo) {
        console.log(gc.GameInfo);


    };
});
