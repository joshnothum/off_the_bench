
myApp.controller('UserController', function (UserService, GameService, $location) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.userGames = UserService.gameObject;

  vm.getUserGames = function () {
    UserService.getUserGames();
    console.log(vm.userGames);
    
  };
  vm.browseGames = function () {
    $location.path('/browse');
  };

  vm.createScreen = function () {
    $location.path('/create');
  };

  vm.searchScreen = function(){
    $location.path('/places');
  };
  vm.getUserGames();
});
