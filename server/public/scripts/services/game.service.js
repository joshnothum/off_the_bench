myApp.service('GameService', function ($http, $location) {

    let self = this;

    self.result = {};
    self.info = {};
    self.newGame = [];
    self.newLocation = {};

    self.getPlaces = function (apiSearch) {
        console.log(apiSearch);
        console.log('Places be working');
        $http.get('/places', apiSearch).then(function (response) {
            self.result.data = response.data.results;

        }).catch(function (error) {
            console.log('my places failed: ', error);
        });

    };// end of getPlaces
    self.getInfo = function (place_id) {
        let infoSearch = {
            params: {
                placeid: place_id,
            }//end of params
        };   // end of infoSearch
        console.log(infoSearch);

        $http.get('/places/info', infoSearch).then(function (response) {
            console.log(response);

            self.info.data = response.data.result;

        }).catch(function (error) {
            console.log('my info failed: ', error);

        });
    };//end of getInfo

    self.createLocation = function (places) {
        self.newGame.push(places);
        self.getInfo(places.place_id);//runs request for addtional information for locations table on database

        $http.post('/places/locations').then(function (response) {
            console.log(response);
            
        }).catch(function (response) {
            console.log('create location did not work:', error);

        });
    }; //end of createGame
    self.sendGame = function (gameInfo) {
        $http.post('/places', gameInfo).then(function (response) {
        }).catch(function (response) {
            console.log('send game did not work: ', error);
        });
    };//end of sendGame

    self.getGames = function () {
        $http.getGames('/places');

    };


});//end of GameService