
myApp.controller('PlacesController', function ($http, $location, UserService, GameService, $mdDialog, $scope, MapService, NgMap, $mdPanel) {
    console.log('PlacesController created');
    let place = this;
    //globalNonsense
    place.data = GameService.result;
    place.info = GameService.info;
    place.newGame = GameService.newGame;
    place.locationDetail = MapService.getMoreLocationDetail;
    place.searchBar = '';

    place.getPlaces = function () {
        let apiSearch = {
            params: {
                query: place.searchBar,
                location: '44.9778,-93.2650',
                radius: 35000,
            }
        };
        GameService.getPlaces(apiSearch);
        place.searchBar = null;
    };//end of getPlaces  

    place.getInfo = function (places) {
        let place_id = places.place_id;
        console.log('getInfo is working here', place_id);
        MapService.getMoreLocationInfo(place_id);
        
    };//end of getInfo

    place.createNewLocation = function (locationToSend, courtInfoToSend) {


        let sendLocation = locationToSend.detail;
        
        console.log(courtInfoToSend);
        
        MapService.createLocation(courtInfoToSend, sendLocation);
        $location.path('/create');
    };//end of createLocation
    place.sendGame = function (game) {
        let gameTime = moment(place.time).format('HH:mm:ss');
        console.log(gameTime);
        let gameDate = moment(place.date).format('MM-DD-YYYY');
        console.log(gameDate);
        let gameInfo = {
            name: game.name,
            time: gameTime,
            date: gameDate,
            maxNumber: place.maxNumber,
            formatted_address: game.formatted_address,
            place_id: game.place_id,
            creator_id: UserService.userObject.userID,
            location_id: game.location_id,
        };//end of gameInfo object
        GameService.sendGame(gameInfo);
        $location.path('/user');
    };//end of sendGame

    place.loadGames = function () {
        UserService.browseGames();
    };//end of loadGames
    place.loadPlaces = function () {
        UserService.loadPlaces();
    };//end of of loadPlaces


    // stars on rating
    place.max = 7;
    place.rate = 10;
    place.isReadonly = false;

    place.hoveringOver = function (value) {
        place.overStar = value;
        place.percent = 100 * (value / $scope.max);
    };

    place.ratingStates = [
        { stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty' }];


    // place.getPanelInfo = function (ev, place_id) {
    //     // let dialogBox = MapService.getMoreLocationInfo(place_id);
    //     // dialogBox.then
        
        
    //   function dialogBox(response) {
    //         $mdDialog.show({
    //             controller: 'DialogController as dc',
    //             templateUrl: 'views/templates/dialog.tmpl.html',
    //             parent: angular.element(document.body),
    //             targetEvent: ev,
    //             clickOutsideToClose: true
    //         })
    //             .then(function (answer) {
    //                 $scope.status = 'You said the information was "' + answer + '".';
    //             }, function () {
    //                 $scope.status = 'You cancelled the dialog.';
    //             });
    //     }
    // };
});// end of Places Controller