myApp.controller('TableController', function ($http, $location, UserService, GameService, $mdDialog, $scope, MapService, NgMap, $mdPanel) {
    console.log('TableController created');
    let table = this;
    MapService.loadTablePlaces();
    table.locationInfoForTable = MapService.allLocationsWithCourtData;
    //from MapService

table.dataChanger = function(data){

     let result = '';

    if(data == 1){
  result = "";
    }else if(data = 2){
        result = "half";
    }
    else{
        result = "3/4";
    }
    return result;
};

});