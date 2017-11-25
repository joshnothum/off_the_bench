myApp.controller('InfoController', function (UserService, GameService, $http, $location) {
  console.log('InfoController created');
  var info = this;
  info.userService = UserService;
  info.editGame = UserService.editGame;

  info.getInfo = function () {
    GameService.getInfo(infoSearch);
  };

  info.editUserGames = function(games){
    console.log('edit user games');
    
  };
});
