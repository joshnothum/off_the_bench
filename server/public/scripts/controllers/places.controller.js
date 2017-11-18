myApp.controller('PlacesController', function ($http, $location, UserService) {
    console.log('PlacesController created');
    let place = this;

    place.getPlaces = function () {
        console.log('Places -- get');
            $http.post('/places').then(function (response) {
                    console.log('Lplaces success: ', response.data);
                   
            }).catch(function (response) {
                console.log('my places failed: ', response);
            });
        };

});