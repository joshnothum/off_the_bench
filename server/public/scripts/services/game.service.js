myApp.service('GameService', function ($http, $location) {

    let self = this;

    self.result = {};
    self.info = {};
    self.newGame = [];
    self.newLocation = {};

    self.getPlaces = function (apiSearch) {
        
       
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
        };   // end of infoSearch object for api parameter
       

          return $http.get('/places/info', infoSearch).then(function (response) {
           

            self.info = response.data.result;
          
            

        }).catch(function (response) {
            console.log('my info failed: ', response);

        });
    };//end of getInfo

    self.createLocation = function (places, creatorid) {
        let getInfo = self.getInfo(places.place_id);
        
        getInfo.then(function(response){//runs request for addtional information for locations table on database

            console.log(self.info.geometry.location.lng);
            
        let locationInfo = {
            creator_id: creatorid,
            name: places.name,
            location: places.formatted_address,
            lat: self.info.geometry.location.lat,
            lng: self.info.geometry.location.lng,
            url: self.info.url,
            phone: self.info.formatted_phone_number,
            place_id: places.place_id

            };// send to locations database
        console.log(locationInfo);
        $http.post('/places/locations', locationInfo).then(function (response) {
            console.log(response);
            
        }).catch(function (response) {
            console.log('create location did not work:', response);

        });
        });
        self.newGame.push(places);
    };//end of createGame
    self.sendGame = function (gameInfo) {
        $http.post('/places', gameInfo).then(function (response) {
        }).catch(function (response) {
            console.log('send game did not work: ', response);
        });
    };//end of sendGame

    self.getGames = function () {
        $http.getGames('/places');

    };


});//end of GameService