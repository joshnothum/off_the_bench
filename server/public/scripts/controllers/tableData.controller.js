myApp.controller('TableController', function ($http, $location, UserService, GameService, $mdDialog, $scope, MapService, NgMap, $mdPanel) {
    console.log('TableController created');
    let table = this;
    MapService.loadDataBasePlaces();
    table.allLocations ={};
    //from MapService
});