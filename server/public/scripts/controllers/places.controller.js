myApp.controller('PlacesController', function ($http, $location, UserService, GameService, $mdDialog, $scope) {
    console.log('PlacesController created');
    let place = this;
    //globalNonsense
    place.data = GameService.result;
    place.info = GameService.info;
    place.newGame = GameService.newGame;
    place.gamesObject = UserService.browseGamesObject;
    place.allLocations = UserService.allLocations;
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

    place.getInfo = function (ev, place_id) {

        let dialogBox = GameService.getInfo(place_id);

        dialogBox.then(function (response) {


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
        });
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
            location: game.formatted_address,
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
//for searchBar may need to edit



    place.loadPlaces();
});// end of Places Controller