myApp.controller('UserController', function(UserService, GameService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.userGames = UserService.gameObject;

  vm.getUserGames = function () {
    let gameMaker = UserService.userObject.userID;
    console.log(gameMaker);
    
    UserService.getUserGames(gameMaker);
  };

});
