
myApp.controller('UserController', function (UserService, GameService, $location, $mdDialog, MapService) {
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

  vm.editUserGames = function(ev,game){
    console.log(game,'this is my answer');
    
    $mdDialog.show({
      controller: 'InfoController as infos',
      templateUrl: 'views/templates/edit1.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    })
      .then(function (answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function () {
        $scope.status = 'You cancelled the dialog.';
      });
      UserService.editUserGames(game);
  };

  vm.getGameMaps = function(game) {
    $location.path('/games');
    MapService.getGameMaps(game);
    MapService.getGameInfo(game);
    
    
  };
  vm.getUserGames();

});
