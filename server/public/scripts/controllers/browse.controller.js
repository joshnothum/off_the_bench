myApp.controller('BrowseController', function ($scope, $mdDialog, GameService, $http, $location, UserService) {
    UserService.browseGames();
    console.log('browsing is easy now!');
    let browse = this;

    browse.gamesObject = UserService.browseGamesObject;

    browse.getInfo = function (ev, place_id) {
        let infoSearch = {
            params: {
                placeid: place_id,
            }//end of params
        };   // end of infoSearch
        $mdDialog.show({
            controller: 'DialogController as dc',
            templateUrl: 'views/templates/dialog1.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });// end of dialog

    };//end of getInfo

    browse.joinGame = function (game_id) {
        console.log(game_id);
        
        let playerJoin = {
            params: {
                gameid: game_id
            }//end of params
        };// end of playerJoin object
        GameService.joinGame(playerJoin);
    };
});