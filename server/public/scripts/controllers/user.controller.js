myApp.controller('UserController', function (UserService, GameService, $location, MapService, $scope) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.userGames = UserService.gameObject;
  vm.MapService = MapService;

  // vm.getUserGames = function () {
  //   UserService.getUserGames();
  //   console.log('User games from player_joins table', vm.userGames);
  // };
  // vm.browseGames = function () {
  //   $location.path('/browse');
  //   //browse.html is ctrl by browserController.
  // };
  vm.createScreen = function () {
    $location.path('/create');
  };
  vm.searchScreen = function () {
    $location.path('/places');
  };
  vm.unJoinGames = function (game) {
    let unJoinGame = game.id;

    GameService.unJoinGames(unJoinGame);

    vm.getUserGames();
  };
  vm.goToGame = function (game) {
    let getGame = game.id;
    let getLocationInfo = game.location_id;
    console.log(getLocationInfo);

    GameService.getGameInfo(game, game.id);

    $location.path('/games');


  };



  vm.tableScreen = function (params) {
    MapService.loadDataBasePlaces();
    $location.path('/table');
  };

  // vm.getUserGames();
});
