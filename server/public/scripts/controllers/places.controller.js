
myApp.controller('PlacesController', function ($http, $location, UserService, GameService, $mdDialog, $scope, MapService, NgMap ) {
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
                radius: 35000
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



    place.createLocation = function (places) {
        let creatorid = UserService.userObject.userID;
        GameService.createLocation(places, creatorid);
        
        
        $location.path('/create');
    };//end of createGame
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

    place.pushLocation= function(place){
        console.log(place);
        
        GameService.pushLocation(place);
    };
    
});// end of Places Controller