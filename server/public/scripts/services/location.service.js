myApp.service('LocationService', function ($http, $location) {

console.log('locations are created');

let self = this;




self.getCourtInfo = function (info) {

console.log(info);

self.courtInfo = info;

$http.get(function(){
    $http.get('/court').then(function (success) {
        console.log('loadTablePlaces is probably working');
        self.allLocationsWithCourtData.data = success.data;
        console.log(success.data);

    }).catch(function (error) {
        console.log('we gots an error in loadDataBasePlaces:', error);
    });

});


};

});