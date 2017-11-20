myApp.controller('PlacesController', function ($http, $location, UserService, GameService) {
    console.log('PlacesController created');
    let place = this;
    
    place.data = GameService.result;
    place.info = GameService.info;
    place.newGame = GameService.newGame;
    
    
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

    place.sendGame = function (game) {
        let gameInfo = {
            name:game.name,
            time: place.time,
            date: place.date,
            maxNumber: place.maxNumber,
            location: game.formatted_address,
            place_id: game.place_id,
            creator: UserService.userObject.userName,
        };
        GameService.sendGame(gameInfo);
      
        
        
        
    };//end of createGame


});