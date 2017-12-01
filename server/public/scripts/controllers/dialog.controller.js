myApp.controller('DialogController', function (GameService, $http, $location) {

console.log('dialog is logged');

    let dialog = this;
    dialog.goHome= function(){
        $location.path('/user');
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
