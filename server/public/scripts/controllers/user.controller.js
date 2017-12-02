myApp.controller('UserController', function (UserService, GameService, $location, MapService, $scope) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.userGames = UserService.gameObject;
  vm.MapService = MapService;

  vm.getUserGames = function () {
    UserService.getUserGames();
    console.log('User games from player_joins table',vm.userGames);
  };
  vm.browseGames = function () {
    $location.path('/browse');
    //browse.html is ctrl by browserController.
  };
  vm.createScreen = function () {
    $location.path('/create');
  };
  vm.searchScreen = function(){
    $location.path('/places');
  };
  vm.unJoinGames = function(game){

    let unJoinGame = game.id;
    
    // let willUnjoin = GameService.unJoinGames(game);
    // swal({
    //   title: "Are you sure?",
    //   icon: "warning",
    //   buttons: true,
    //   dangerMode: true,
    // })
    //   .then((willUnjoin) => {
    //     if (willUnjoin) {
    //       swal("Too bad! Maybe next time!", {
    //       });
    //     } else {
    //       swal("Ok, great!");
    //     }
    GameService.unJoinGames(unJoinGame);
    vm.getUserGames();
  };
  vm.goToGame = function(game) {
    let getGame = game.id;
    let getLocationInfo = game.location_id;
    console.log(getLocationInfo);
    
    GameService.getGameInfo(game, game.id);

    $location.path('/games');
  };



  vm.tableScreen = function (params) {
    MapService.loadDataBasePlaces();
    $location.path('/locationtable');
  };

  vm.getUserGames();
});
// $mdDialog.show({
//   controller: 'DialogController as dc',
//   templateUrl: 'views/templates/dialog.template.html',
//   parent: angular.element(document.body),
//   targetEvent: ev,
//   clickOutsideToClose: true
// })
//   .then(function (answer) {
//     $scope.status = 'You said the information was "' + answer + '".';
//   }, function () {
//     $scope.status = 'You cancelled the dialog.';
//   });