myApp.service('MapService', function ($http, $location) {
    console.log('MapService Loaded');

    let self = this;

    self.gameMap = {};
    self.getMoreLocationDetail = {};
    self.gameInfo={};
    self.mapSearch={};
    self.allLocations ={};

   



    self.getGameInfo= function(game){
        let gameIDForinfo = game.place_id;
        $http.get('/info/gameInfo', gameIDForinfo ).then(function (response) {
            console.log(response);
        }).catch(function (response) {
            console.log('getGameInfo failed: ', response);

        });
    };


    self.getMoreLocationInfo=function(place_id){
            let locationDetailSearch = {
                params: {
                    placeid: place_id,
                }//end of params
            };   // end of gameInfoSearch object for table join games on locations
            $http.get('/places/locationDetail', locationDetailSearch).then(function (response) {
                self.getMoreLocationDetail.detail = response.data.result;
                console.log(self.getMoreLocationDetail);

            }).catch(function (response) {
                console.log('my info failed: ', response);
            });
            $location.path('/location');

    };//end of getMoreLocationInfo

self.loadDataBasePlaces = function () {
            $http.get('info/location').then(function (success) {
                console.log('loadPlaces is probably working');
                self.allLocations.data = success.data;
                console.log(success.data);

            }).catch(function (error) {
                console.log('we gots an error in loadDataBasePlaces:', error);
            });
        };//end of loadDatabasePlaces

    self.getMorePhotoInfo = function (photoreference) {
        let photoReferenceSearch = {
            params: {
                photo_reference: photoreference,
            }//end of params
        };   // end of gameInfoSearch object for table join games on locations
        $http.get('/places/photoDetail', locationDetailSearch).then(function (response) {
            self.getMorePhotoDetail.detail = response.data.result;
            console.log(self.getMorePhotoDetail);
        }).catch(function (response) {
            console.log('my photo failed: ', response);
        });

    };//end of getMoreLocationInfo
});