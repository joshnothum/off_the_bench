myApp.controller('DialogController', function (GameService, $http, $location) {

    console.log('dialog is logged');

    let dialog = this;
    dialog.goHome = function () {
        $location.path('/user');
    };
    dialog.goAbout = function () {
        $location.path('/about');
    };

    dialog.hide = function () {
        $mdDialog.hide();
    };

    dialog.cancel = function () {
        $mdDialog.cancel();
    };

    dialog.answer = function (answer) {
        $mdDialog.hide(answer);
    };
});
