myApp.service('GameService', function ($http, $location) {

let self = this;

self.result = {};
self.info = [];
self.newGame =[];

    self.getPlaces = function (apiSearch) {
        console.log(apiSearch);
        

    

        console.log('Places be working');
        $http.get('/places', apiSearch).then(function (response) {
            console.log(response.data.results);
            self.result.data = response.data.results;
            
            

        }).catch(function (response) {
            console.log('my places failed: ', response);
        });
        
    };// end of getPlaces
    self.getInfo = function (infoSearch) {
        

        $http.get('/places/info', infoSearch).then(function (response) {
            
            self.info = response.data.result;

        }).catch(function (response) {
            console.log('my info failed: ', response);
        });
    };//end of getInfo

    self.createGame = function (places) {
        console.log(places);
        self.newGame.push(places);
        console.log(self.newGame);
        
        
    };//end of createGame

    self.sendGame = function (gameInfo) {
        console.log(gameInfo);
        console.log(self.newGame);


    };//end of createGame


   

        

});