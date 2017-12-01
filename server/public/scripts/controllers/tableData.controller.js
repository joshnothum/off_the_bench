myApp.controller('TableDataController', function ($http, $location, UserService, GameService, $mdDialog, $scope, MapService, NgMap, $mdPanel) {
    console.log('TableController created');
    let table = this;
    MapService.loadDataBasePlaces();

    table.tableScreen = function (params) {
        $location.path('/locationtable');
    };
});