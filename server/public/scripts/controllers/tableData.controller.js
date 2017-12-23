myApp.controller('TableController', function ($http, $location, UserService, GameService, $mdDialog, $scope, MapService, NgMap, $mdPanel) {
    console.log('TableController created');
    let table = this;
    MapService.loadTablePlaces();
    table.locationInfoForTable = MapService.allLocationsWithCourtData;
    //from MapService

    table.dataChanger = function (data) {

        let result = '';

        if (data == 100) {
            result = "Full";
        } else if (data == 50) {
            result = "Half";
        }
        else {
            result = "3/4";
        }
        return result;
    };

    table.surfaceChanger = function (surface) {
        if (surface == 1) {
            result = "Hardwood";
        } else if (surface == 2) {
            result = "Carpet";
        }
        else if (surface == 4) {
            result = "Asphalt";
        }
        else {
            result = "Rubber";
        }
        return result;
    };
    table.sortColumn = "size";
    table.reverseSort = false;

    table.sortData = function (column) {
        table.reverseSort = (table.sortColumn == column) ? !table.reverseSort : false;
        table.sortColumn = column;
    };

    table.getSortClass = function (column) {
        if (table.sortColumn == column) {
            return table.reverseSort ? 'arrow-down' : 'arrow-up';
        }
        return '';
    };

    table.goToCourtInfo = function (court_id){
        $location.path('/courtInfo');
    };

});
