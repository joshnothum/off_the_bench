myApp.controller('DialogController', function ($scope, $mdDialog, GameService) {

    console.log('angular controller is loaded, homie');
    
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