myApp.controller('PlacesController', function ($http, $location, UserService, GameService) {
    console.log('PlacesController created');
    let place = this;
    place.search = '';
    place.data = GameService.result;
    place.info = GameService.info;

    place.getPlaces = function(){


        let apiSearch = {
            params: {
                query: place.search,
                location: '44.9778,-93.2650',
                radius: 35000
            }
        };
        console.log(apiSearch);
        
        GameService.getPlaces(apiSearch);
        place.search = null;
        
    };
    // place.getPlaces = function () {

            // let apiSearch = {
            //     params:{
            //     query: place.search,
            //     location: '44.9778,-93.2650',
            //     radius: 35000
            //     }
            // };

    //     console.log('Places be working');
    //         $http.get('/places', apiSearch).then(function (response) {
    //                 console.log(response.data.results);
    //                 place.data = response.data.results;
                   
    //         }).catch(function (response) {
    //             console.log('my places failed: ', response);
    //         });
    //       place.search =null; 
    //     };
    place.getInfo = function (place_id) {
        
        let infoSearch = {
            params: {
                placeid: place_id,
            }
        };
        
        GameService.getInfo(infoSearch);
        console.log(place.info);
        
    };

});