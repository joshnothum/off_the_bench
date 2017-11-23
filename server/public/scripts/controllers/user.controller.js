myApp.controller('UserController', function(UserService, GameService, $location) {
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

  vm.browseGames = function(){
    UserService.browseGames();
    console.log();
    
  
    
  };
});
