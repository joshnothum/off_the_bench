myApp.service('MapService', function ($http, $location) {
    console.log('MapService Loaded');

    let self = this;

    self.gameMap = {};
    self.gameInfo={};



    self.getGameInfo= function(game){
        let mapPlaceID = game.place_id;
        console.log(mapPlaceID);
        

        $http.get('/info/gameInfo', mapPlaceID ).then(function (response) {
            console.log(response);



           



        

        }).catch(function (response) {
            console.log('getGameInfo failed: ', response);

        });
    };



    self.getGameMaps = function (game) {
        console.log('we are connected', game.formatted_address);
        let mapAddress = game.formatted_address;

        let mapSearch = {
            params: {
                center: mapAddress,
                zoom: '15',
                size: '800 x 500',
            }
        };

        self.gameInfo = game;


        $http.get('/places/maps', mapSearch).then(function (response) {
            console.log(response);



            self.gameMap.map = response.data.request.uri.href;



            console.log(self.gameMap);

        }).catch(function (response) {
            console.log('my maps failed: ', response);

        });
    };  //end of getMaps



});