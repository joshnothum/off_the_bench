myApp.controller('DialogController', function (UserService, GameService, $http, $location, $mdPanel) {
    let dialog = this;
    
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
