myApp.controller('CreateController', function ($scope, $mdDialog, GameService, UserService, MapService) {
    console.log('and there was only on true Creator!');

    let creator = this;

    creator.loadPlaces = function () {
        MapService.loadDataBasePlaces();
    };//end of of loadDataBasePlaces

creator.loadPlaces();
});