myApp.controller('AngularController', function ($scope, $mdDialog) {

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