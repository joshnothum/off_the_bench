myApp.controller('UserController', function (UserService, GameService, $location) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.userGames = UserService.gameObject;

  vm.getUserGames = function () {
    UserService.getUserGames();
  };
  vm.browseGames = function () {
    UserService.browseGames();
    $location.path('/browse');

  };

  vm.createScreen = function () {
    $location.path('/create');
  }
  vm.getUserGames();
});
