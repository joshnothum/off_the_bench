myApp.controller('CourtController', function ($scope, $mdDialog, LocationService, UserService, MapService, $location) {
console.log('created');

let court = this;
court.selectedIndex = 0;

court.info = LocationService.courtInfo;

console.log('courtInfo', court.info);


court.nextImage = function () {
        console.log('made it here');

        court.selectedIndex += 1;
        if (court.selectedIndex >= court.photo_reference.length) {
            court.selectedIndex = 0;
        }


    };
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

    court.goToInput = function () {
        $location.path('/input');
    };




});

