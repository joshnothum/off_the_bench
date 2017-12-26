myApp.controller('PhotoController', function ($scope, $mdDialog, GameService, $http, $location, UserService, MapService) {
    const apikey = 'AXGrpsfPWTs27zHOMSgc0z';
    const client = filestack.init(apikey);
    let photo = this;

    photo.allLocations = MapService.allLocations;
    photo.moreInfo = MapService.getInfoForAdd;
    photo.location;

function handleFilestack(info) {
    console.log(info);
    
}
    

    
console.log('photoController is here');
    var fsClient = filestack.init('AXGrpsfPWTs27zHOMSgc0z');
    photo.openPicker = function () {
        client.pick({
            fromSources: ["local_file_system", "imagesearch", "facebook", "instagram", "dropbox"]
        }).then(function (response) {
            // declare this function to handle response
            handleFilestack(response);
            console.log('response', response);
            
        });
    }

    photo.loadPlaces = function () {
        MapService.loadDataBasePlaces();

        console.log('load places is here');
    };//end of of loadDataBasePlaces

    photo.grabLocation= function(location){
        console.log(location);
        
        MapService.getMoreToAdd(location.place_id);
        
     
       
    };
    photo.loadPlaces();
});