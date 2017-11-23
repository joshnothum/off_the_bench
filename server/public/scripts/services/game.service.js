myApp.service('GameService', function ($http, $location) {

let self = this;

self.result = {};
self.info = {};
self.newGame =[];

    self.getPlaces = function (apiSearch) {
        console.log(apiSearch);
        console.log('Places be working');
        $http.get('/places', apiSearch).then(function (response) {
            self.result.data = response.data.results;
            
        }).catch(function (response) {
            console.log('my places failed: ', response);
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

        }).catch(function (response) {
            console.log('my info failed: ', response);

        });// self.info.data = response.data.result;
    };//end of getInfo

    self.createGame = function (places) {
        self.newGame.push(places);
        console.log(places.place_id);
        
        self.getInfo(places.place_id);

    };//end of createGame
    self.sendGame = function (gameInfo) {
        $http.post('/places', gameInfo).then(function (response) {
        }).catch(function (response) {
            console.log('send game did not work: ', response);
        });
    };//end of sendGame

    self.getGames = function () {
        $http.getGames('/places')
        
    };
        

});//end of GameService