myApp.controller('CreateController', function ($scope, $mdDialog, GameService, UserService, MapService) {
    console.log('and there was only on true Creator!');

    let creator = this;

    creator.allLocations = MapService.allLocations;

    creator.newGame ={};
    

    creator.loadPlaces = function () {
        MapService.loadDataBasePlaces();

        console.log('load places is here');
    };//end of of loadDataBasePlaces
    creator.sendGame = function (game) {
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
        };//end of gameInfo object
        GameService.sendGame(gameInfo);
        $location.path('/user');
    };//end of sendGame

creator.loadPlaces();
});