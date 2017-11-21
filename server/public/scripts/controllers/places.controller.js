myApp.controller('PlacesController', function ($http, $location, UserService, GameService) {
    console.log('PlacesController created');
    let place = this;
    
    place.data = GameService.result;
    place.info = GameService.info;
    place.newGame = GameService.newGame;
    // place.gameTime = moment(place.time).format('HH:mm:ss');
    // console.log(gameTime);
    // place.gameDate = moment(place.date).format('MM-DD-YYYY');
    // console.log(gameDate);
 
    
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

        let gameTime = moment(place.time).format('HH:mm:ss');
        console.log(gameTime);
        let gameDate = moment(place.date).format('MM-DD-YYYY');
        console.log(gameDate);
        
        
        
        
    

       
       
        let gameInfo = {
            name: game.name,
            time: gameTime,
            date: gameDate,
            maxNumber: place.maxNumber,
            location: game.formatted_address,
            place_id: game.place_id,
            creator_id: UserService.userObject.userID,
        };
        console.log(gameInfo);
        
        GameService.sendGame(gameInfo);
      
        
        
        
    };//end of createGame


});