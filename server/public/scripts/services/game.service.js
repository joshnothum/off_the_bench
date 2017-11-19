myApp.service('GameService', function ($http, $location) {

let self = this;

self.result = {};

    this.getPlaces = function (apiSearch) {
        console.log(apiSearch);
        

        // let apiSearch = {
        //     params: {
        //         query: place.search,
        //         location: '44.9778,-93.2650',
        //         radius: 35000
        //     }
        // };

        console.log('Places be working');
        $http.get('/places', apiSearch).then(function (response) {
            console.log(response.data.results);
            self.result.data = response.data.results;
            
            

        }).catch(function (response) {
            console.log('my places failed: ', response);
        });
        console.log(self.result);
    };
    // this.getInfo = function (place_id) {
    //     console.log('Info be working');
    //     let infoSearch = {
    //         params: {
    //             placeid: place_id,
    //         }
    //     };
    //     console.log(place_id);

    //     $http.get('/places/info', infoSearch).then(function (response) {
    //         console.log(response.data.result);
    //         place.info = response.data.result;

    //     }).catch(function (response) {
    //         console.log('my info failed: ', response);
    //     });
    // };


});