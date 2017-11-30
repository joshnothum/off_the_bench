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

    self.pushLocation = function (places) {
        self.newGame.push(places);
    };
    self.createLocation = function (places, creatorid) {
        let getInfo = self.getInfo(places.place_id);
        getInfo.then(function (response) {//runs request for addtional information for locations table on database/ with promise chain
            console.log(self.info.geometry.location.lng);

            

            let locationInfo = {
                creator_id: creatorid,
                name: places.name,
                formatted_address: places.formatted_address,
                lat: self.info.geometry.location.lat,
                lng: self.info.geometry.location.lng,
                url: self.info.url,
                phone: self.info.formatted_phone_number,
                place_id: places.place_id,
                

            };// send to locations database
            $http.post('/places/locations', locationInfo).then(function (response) {
                console.log(response.status);
            }).catch(function (response) {
                console.log('create location did not work:', response);
            });
        });
        self.pushLocation(places);
    };//end of createGame
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
    self.unJoinGames = function (playerJoin) {
        $http.post('/info', playerJoin).then(function (response) {
            console.log(response);

        }).catch(function (response) {
            console.log('joinGame did not work', response);

        });//end of post/catch
    };//end of joinGame
});//end of GameService