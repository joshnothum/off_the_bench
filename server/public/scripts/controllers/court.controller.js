myApp.controller('CourtController', function ($scope, $mdDialog, LocationService, UserService, MapService, $location) {
console.log('created');

let court = this;


court.info = LocationService.courtInfo;
console.log('courtInfo', court.info);


    court.dataChanger = function (data) {

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

    court.surfaceChanger = function (surface) {
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

});