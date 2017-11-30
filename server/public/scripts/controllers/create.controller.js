myApp.controller('CreateController', function ($scope, $mdDialog, GameService, UserService, MapService, $mdProgressCircularProvider) {
    console.log('and there was only on true Creator!');

    let creator = this;

    creator.allLocations = MapService.allLocations;
    

    creator.loadPlaces = function () {
        MapService.loadDataBasePlaces();

        console.log('load places is here');
        
    };//end of of loadDataBasePlaces

creator.loadPlaces();
});