myApp.service('GameService', function ($http, $location) {

let self = this;

self.result = {};
self.info = [];

    this.getPlaces = function (apiSearch) {
        console.log(apiSearch);
        

    

        console.log('Places be working');
        $http.get('/places', apiSearch).then(function (response) {
            console.log(response.data.results);
            self.result.data = response.data.results;
            
            

        }).catch(function (response) {
            console.log('my places failed: ', response);
        });
        console.log(self.result);
    };
    this.getInfo = function (infoSearch) {
        

        $http.get('/places/info', infoSearch).then(function (response) {
            console.log(response.data.result);
            self.info = response.data.result;

        }).catch(function (response) {
            console.log('my info failed: ', response);
        });
    };


});