myApp.controller('InfoController', function (UserService, GameService, $http, $location, MapService, $scope) {
  console.log('InfoController created');
  var info = this;

 info.gameForDisplay = GameService.gameFromBrowse;
 info.gameUserInformation = GameService.gameByIDInfo;
 info.photoReference = MapService.getMoreLocationDetail.detail;

  info.getInfo = function () {
    GameService.getInfo(infoSearch);
  };

  info.editUserGames = function(games){
    console.log('edit user games');
    $location.path('/path');
  };
info.selectedIndex = 0;
  
 
  info.nextImage = function(){
    console.log('made it here');
    
    info.selectedIndex += 1;
    if (info.selectedIndex >= info.images.length) {
      info.selectedIndex = 0;
    }


  };

});