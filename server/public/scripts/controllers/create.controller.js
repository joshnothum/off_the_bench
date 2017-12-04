myApp.controller('CreateController', function ($scope, $mdDialog, GameService, UserService, MapService, $location) {
    console.log('and there was only on true Creator!');
    let creator = this;

    creator.allLocations = MapService.allLocations;
    creator.gameLocation = {};
    creator.gameTime = '';
    creator.location = '';
    creator.gameDate = '';
    creator.gameMaxNumber = '';
    creator.marker={};



    creator.loadPlaces = function () {
        MapService.loadDataBasePlaces();

        console.log('load places is here');
    };//end of of loadDataBasePlaces
    creator.sendGame = function (location) {
        console.log(location);
        let gameTime = moment(creator.gameTime).format('HH:mm');
        console.log(gameTime);
        let gameDate = moment(creator.gameDate).format('MM-DD-YYYY');
        console.log(gameDate);
        let gameInfo = {
            name: location.name,
            time: gameTime,
            date: gameDate,
            maxNumber: creator.gameMaxNumber,
            formatted_address: location.formatted_address,
            place_id: location.place_id,
            location_id: location.id,
        };//end of gameInfo object
        GameService.sendGame(gameInfo);
        console.log(gameInfo);
    };//end of sendGame

    creator.loadPlaces();




});