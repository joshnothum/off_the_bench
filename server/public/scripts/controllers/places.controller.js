myApp.controller('PlacesController', function ($http, $location, UserService, GameService, $mdDialog, $scope, $timeout) {
    console.log('PlacesController created');
    let place = this;
    
    place.data = GameService.result;
    place.info = GameService.info;
    place.newGame = GameService.newGame;
    place.gamesObject = UserService.browseGamesObject;


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
    place.getInfo = function (ev, place_id) {

        $mdDialog.show({
            controller: 'DialogController as dc',
            templateUrl: 'views/templates/dialog1.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });



        GameService.getInfo(place_id);
     
    };//end of getInfo


    place.createLocation= function(places){
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
            location: game.formatted_address,
            place_id: game.place_id,
            creator_id: UserService.userObject.userID,
        };
        GameService.sendGame(gameInfo);     
        
    };//end of createGame

    
    place.loadPlaces = function () {
        UserService.browseGames();
    };

});// end of Places Controller