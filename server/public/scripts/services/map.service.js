myApp.service('MapService', function ($http, $location) {
    console.log('MapService Loaded');
    self.getMaps = function (place_id) {
        $http.get('/places', apiSearch).then(function (response) {
            self.result.data = response.data.results;
        }).catch(function (response) {
            console.log('my places failed: ', response);
   
});
    }