myApp.service('MapService', function ($http, $location) {
    console.log('MapService Loaded');

    let self = this;

    self.gameMap = {};
    self.getMoreLocationDetail = {};
    self.gameInfo = {};
    self.mapSearch = {};
    self.allLocations = {};
    self.allLocationsWithCourtData = {};

    self.getMoreLocationInfo = function (place_id) {
        let locationDetailSearch = {
            params: {
                placeid: place_id,
            }//end of params
        };   // end of gameInfoSearch object for table join games on locations
        $http.get('/places/locationDetail', locationDetailSearch).then(function (response) {
            self.getMoreLocationDetail.detail = response.data.result;
            console.log(self.getMoreLocationDetail);

        }).catch(function (response) {
            console.log('my moreLocateinfo failed: ', response);
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

    self.pushLocation = function (places) {
        self.newGame.push(places);
    };
    self.createLocation = function (courtInfo, locationInfo) {

        console.log(locationInfo);
        console.log(courtInfo);
        //had some dataBinding issues and found this to work

        let locationAndCourt = {
            name: locationInfo.name,
            formatted_address: locationInfo.formatted_address,
            lat: locationInfo.geometry.location.lat,
            lng: locationInfo.geometry.location.lng,
            url: locationInfo.url,
            formatted_phone_number: locationInfo.formatted_phone_number,
            place_id: locationInfo.place_id,
            photo:locationInfo.photos,
            indoor: courtInfo.indoor,
            size: courtInfo.courtSize,
            surface: courtInfo.courtSurface,
            price: courtInfo.price,
            air_con: courtInfo.courtAirCon,
            lights: courtInfo.lights,
        };

        console.log(locationAndCourt);


        $http.post('/places/locations', locationAndCourt).then(function (response) {
        }).catch(function (response) {
            $location.path('/create');
            console.log('create location did not work:', response);
            console.log(response);
        });

    };//end of createLocation
    self.loadTablePlaces = function () {
        $http.get('info/table').then(function (success) {
            console.log('loadTablePlaces is probably working');
            self.allLocationsWithCourtData.data = success.data;
            console.log(success.data);

        }).catch(function (error) {
            console.log('we gots an error in loadDataBasePlaces:', error);
        });
    };//end of loadDatabasePlaces
});