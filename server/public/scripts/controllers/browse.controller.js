myApp.controller('BrowseController', function ($scope, $mdDialog, GameService, $http, $location, UserService) {
    UserService.browseGames();
    console.log('browsing is easy now!');
    let browse = this;

    browse.gamesObject = UserService.browseGamesObject;

    browse.getInfo = function (place) {


        MapService.getGameInfo(place);
        //let dialogBox = GameService.getInfo(place_id);

        // dialogBox.then(function (response) {
        //     $mdDialog.show({
        //         controller: 'DialogController as dc',
        //         templateUrl: 'views/templates/dialog1.tmpl.html',
        //         parent: angular.element(document.body),
        //         targetEvent: ev,
        //         clickOutsideToClose: true
        //     })
        //         .then(function (answer) {
        //             $scope.status = 'You said the information was "' + answer + '".';
        //         }, function () {
        //             $scope.status = 'You cancelled the dialog.';
        //         });
        // });
        $location.path('/games');
    };//end of getInfo

    browse.joinGame = function (game_id) {
        console.log(game_id);
        
        let playerJoin = {
            gameid: game_id
        };// end of playerJoin object
        GameService.joinGame(playerJoin);
    };
});