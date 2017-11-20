myApp.controller('PlacesController', function ($http, $location, UserService, GameService) {
    console.log('PlacesController created');
    let place = this;
    place.search = '';
    place.data = GameService.result;
    place.info = GameService.info;
    place.newGame = GameService.newGame;
    place.date;
    place.time;

    place.getPlaces = function(){


        let apiSearch = {
            params: {
                query: place.search,
                location: '44.9778,-93.2650',
                radius: 35000
            }
        };
       
        
        GameService.getPlaces(apiSearch);
        place.search = null;
        
    };//end of getPlaces
   
    place.getInfo = function (place_id) {
        
        let infoSearch = {
            params: {
                placeid: place_id,
            }
        };
        
        GameService.getInfo(infoSearch);
     
        
    };//end of getInfo

    place.createGame= function(places){
        GameService.createGame(places);
        $location.path('/create');
    };//end of createGame

    place.sendGame = function () {
        let gameInfo = {
            time: place.time,
            date: place.date,
        };
        GameService.sendGame(gameInfo);
        console.log(gameInfo);
        console.log(place.time);
        console.log(place.userName);
        
        
        
    };//end of createGame


});