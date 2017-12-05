myApp.controller('GameController', function (UserService, GameService, $http, $location, MapService) {
    console.log('GameController created');
    var gc = this;
    us = UserService;

    gc.gameInformation = GameService.gameByIDInfo;
    gc.gameForDisplay = GameService.gameFromBrowse;
    console.log(gc.gameInformation);

    gc.joinGame = function (gameInfo) {
        console.log(gameInfo);
        let playerJoin = {
            gameid: gameInfo
        };// end of playerJoin object

        GameService.joinGame(playerJoin);
        $location.path('/users');

    };
});
