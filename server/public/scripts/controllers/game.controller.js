myApp.controller('GameController', function (UserService, GameService, $http, $location, MapService) {
    console.log('GameController created');
    var gc = this;
    gc.userService = UserService;
    gc.getMap = MapService.mapSearch.map;
    gc.gameInformation = MapService.gameInfo;
    

    gc.getMaps = function () {
        
        GameService.getGameInfo();
     };
    gc.gameReq = function () {

    MapService.gameReq();
    
};

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

console.log(gc.getMap);

    });
