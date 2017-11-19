myApp.controller('PlacesController', function ($http, $location, UserService) {
    console.log('PlacesController created');
    let place = this;
    place.search = '';
    place.data =[];
    

    place.getPlaces = function () {
            let apiSearch = {
                params:{
                query: place.search,
                location: '44.9778,-93.2650',
                radius: 35000
                }
            };

        console.log('Places be working');
            $http.get('/places', apiSearch).then(function (response) {
                    console.log(response.data.results);
                    place.data = response.data.results;
                   
            }).catch(function (response) {
                console.log('my places failed: ', response);
            });
        };

});