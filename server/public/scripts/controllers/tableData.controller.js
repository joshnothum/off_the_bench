myApp.controller('TableController', function ($http, $location, UserService, GameService, $mdDialog, $scope, MapService, NgMap, $mdPanel) {
    console.log('TableController created');
    let table = this;
    MapService.loadTablePlaces();
    table.locationInfoForTable = MapService.allLocationsWithCourtData;
    //from MapService

table.dataChanger = function(data){

     let result = '';

    if(data == 100){
  result = "Full";
    }else if(data == 50){ 
        result = "Half";
    }
    else{
        result = "3/4";
    }
    return result;
};

table.surfaceChanger = function(surface){
    if (surface == 1) {
        result = "Hardwood";
    } else if (surface == 2) {
        result = "Carpet";
    }
    else if (surface ==4){
        result ="Asphalt";
    }
    else {
        result = "Rubber";
    }
    return result;
};
    vm.sortColumn = "date";
    vm.reverseSort = false;

    vm.sortData = function (column) {
        vm.reverseSort = (vm.sortColumn == column) ? !vm.reverseSort : false;
        vm.sortColumn = column;
    }

    vm.getSortClass = function (column) {
        if (vm.sortColumn == column) {
            return vm.reverseSort ? 'arrow-down' : 'arrow-up';
        }
        return '';
    }

});
