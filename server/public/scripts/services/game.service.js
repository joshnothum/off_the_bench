myApp.service('GameService', function ($http, $location) {
    let self = this;
    //globalNonsense
    self.result = {};
    self.browseGamesObject = {};
    self.info = {};
    self.newGame = [];
    self.newLocation = {};
    self.photo ={};

    self.getPlaces = function (apiSearch) {
        $http.get('/places', apiSearch).then(function (response) {
            self.result.data = response.data.results;
            console.log(self.result.data);
            
        }).catch(function (response) {
            console.log('my places failed: ', response);
        });
    };// end of getPlaces

    //below may be moved to gameService
    self.getMoreGameInfo = function (place_id) {
        let gameInfoSearch = {
            params: {
                placeid: place_id,
            }//end of params
        };   // end of gameInfoSearch object for table join games on locations
        // $http.get('/info/gameInfo', gameInfoSearch).then(function (response) {
        //     self.info = response.data.result;
        //     console.log(self.info);
            
        // }).catch(function (response) {
        //     console.log('my info failed: ', response);
        // });
        $http.get('/info/gameInfo', gameInfoSearch).then(function (response) {
            self.info = response.data.result;
            console.log(self.info);

        }).catch(function (response) {
            console.log('my info failed: ', response);
        });
    };//end of getInfo
    self.sendGame = function (gameInfo) {
        $http.post('/places', gameInfo).then(function (response) {
        }).catch(function (response) {
            console.log('send game did not work: ', response);
        });
    };//end of sendGame

    self.joinGame= function(playerJoin){
        $http.post('/info', playerJoin).then(function(response){
            console.log(response);
            
        }).catch(function (response) {
            console.log('joinGame did not work', response);
            
        });//end of post/catch
    };//end of joinGame

    self.browseGames = function () {
        $http.get('/info').then(function (success) {
            console.log('browseGames made to the get', success);
            self.browseGamesObject.data = success.data;
            console.log(self.browseGamesObject);

        }).catch(function (error) {
            console.log('error in browseGames:', error);
        });//end of catch
        // $location.path('/browse');
    };//end of browseGames
    self.unJoinGames = function (playerUnJoin) {
        console.log(playerUnJoin);
        
        $http.delete('/info/' + playerUnJoin).then(function (response) {
            console.log(response);
            //need refresh here
        }).catch(function (response) {
            console.log('UnjoinGame did not work', response);

        });//end of post/catch
    };//end of joinGame
});//end of GameService