myApp.service('MapService', function ($http, $location) {
    console.log('MapService Loaded');

    let self = this;

    self.gameMap = {};
    self.getMoreLocationDetail = {};
    self.gameInfo={};
    self.mapSearch={};
    self.allLocations ={};

   



    self.getGameInfo= function(game){
        let gameIDForinfo = game.place_id;


        $http.get('/info/gameInfo', gameIDForinfo ).then(function (response) {
            console.log(response);



           



        

        }).catch(function (response) {
            console.log('getGameInfo failed: ', response);

        });
    };
    // self.getLocationPhoto = function (photoID) {
    //     let photoref = photoID.photo_reference;
    //     let photoSearch = {
    //         params:{
    //             maxheight: 400,
    //             maxwidth: 400,
    //             photoreference: photoref
    //         }
    //     };
    //     console.log(photoSearch);
        
    //     $http.get('/places/photo', photoSearch).then(function (response) {
    //         self.photo = response;
    //         console.log(self.photo);

    //     }).catch(function (response) {
    //         console.log('my photo failed: ', response);
    //     });

    // };

    self.getGameMaps = function (game) {
        console.log('we are connected', game.formatted_address);
        let mapAddress = encodeURI(game.formatted_address);
    
        console.log(mapAddress);
        

      self.mapSearch.map = {
           
                center: mapAddress,
                zoom: '14',
                size: '1200 x 800',
                key:'AIzaSyC6pTgdL2rppjCyaN6ef5ZhMvB-6OSD7t8',
                scale: 3
           };
          
   
    
    // };

        self.gameInfo = game;


        // // $http.get('/places/maps/'+ game).then(function (response) {
        // //     console.log(game);
            
        // //     console.log(response);


console.log(self.mapSearch);

    };  //end of getMaps


    self.getMoreLocationInfo=function(place_id){

       
            let locationDetailSearch = {
                params: {
                    placeid: place_id,
                }//end of params
            };   // end of gameInfoSearch object for table join games on locations
            $http.get('/places/locationDetail', locationDetailSearch).then(function (response) {
                self.getMoreLocationDetail.detail = response.data.result;
                console.log(self.getMoreLocationDetail);

            }).catch(function (response) {
                console.log('my info failed: ', response);
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


});