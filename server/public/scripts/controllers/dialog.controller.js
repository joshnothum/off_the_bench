myApp.controller('DialogController', function ($scope, $mdDialog, GameService) {

    console.log('dialog is loaded, homie');
    let dialog = this;
    dialog.gameInfo = GameService.info;

    console.log(dialog.gameInfo);
    
    
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    });