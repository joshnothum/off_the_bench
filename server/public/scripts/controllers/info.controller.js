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
    $location.path('/path');
  };
});
// // browse.getInfo = function (ev, place_id) {
// //   let dialogBox = MapService.getInfo(place_id);

// //   dialogBox.then(function (response) {
// //     $mdDialog.show({
// //       controller: 'DialogController as dc',
// //       templateUrl: 'views/templates/dialog1.tmpl.html',
// //       parent: angular.element(document.body),
// //       targetEvent: ev,
// //       clickOutsideToClose: true
// //     })
// //       .then(function (answer) {
// //         $scope.status = 'You said the information was "' + answer + '".';
// //       }, function () {
// //         $scope.status = 'You cancelled the dialog.';
// //       });
// //   });
// };