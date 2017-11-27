myApp.service('MapService', function ($http, $location) {
    console.log('MapService Loaded');

    let self = this;

    self.gameMap = {};
    self.gameInfo={};



    self.getGameInfo= function(game){
        let gameIDForinfo = game.place_id;


        $http.get('/info/gameInfo', gameIDForinfo ).then(function (response) {
            console.log(response);



           



        

        }).catch(function (response) {
            console.log('getGameInfo failed: ', response);

        });
    };

    self.getPhoto = function (photoID) {
        let photoref = photoID.photo_reference;
        let photoSearch = {
            params:{
                maxheight: 400,
                maxwidth: 400,
                photoreference: photoref
            }
        };
        console.log(photoSearch);
        
        $http.get('/places/photo', photoSearch).then(function (response) {
            self.photo = response;
            console.log(self.photo);

        }).catch(function (response) {
            console.log('my photo failed: ', response);
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