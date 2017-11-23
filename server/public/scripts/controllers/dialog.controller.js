myApp.controller('DialogController', function ($scope, $mdDialog, GameService) {

    console.log('dialog is loaded, homie');
    let dialog = this;
    dialog.gameInfo = GameService.info;

    
    });