myApp.controller('InfoController', function (UserService, GameService, $http, $location, MapService, $scope) {
  console.log('InfoController created');
  var info = this;

 info.gameForDisplay = GameService.gameFromBrowse;
 info.gameUserInformation = GameService.gameByIDInfo;
info.photoReference = MapService.getMoreLocationDetail;

  info.getInfo = function () {
    GameService.getInfo(infoSearch);
  };

  info.editUserGames = function(games){
    console.log('edit user games');
    $location.path('/path');
  };

  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  info.addSlide = function () {
    
  };

  $scope.randomize = function () {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }


  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }


  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }
    return array;
  }




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