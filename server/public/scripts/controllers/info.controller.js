myApp.controller('InfoController', function(UserService, GameService, $http, $location) {
  console.log('InfoController created');
  var info = this;
  info.userService = UserService;
  

  info.getInfo = function () {
  
  GameService.getInfo(infoSearch);
  };
});
