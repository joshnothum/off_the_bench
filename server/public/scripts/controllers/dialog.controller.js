myApp.controller('DialogController', function (UserService, GameService, $http, $location, $mdPanel) {

function PanelDialogCtrl(mdPanelRef) {
    this._mdPanelRef = mdPanelRef;
}

PanelDialogCtrl.prototype.closeDialog = function () {
    var panelRef = this._mdPanelRef;

    panelRef && panelRef.close().then(function () {
        angular.element(document.querySelector('.demo-dialog-open-button')).focus();
        panelRef.destroy();
    });
};

function PanelMenuCtrl(mdPanelRef, $timeout) {
    this._mdPanelRef = mdPanelRef;
    this.favoriteDessert = this.selected.favoriteDessert;
    $timeout(function () {
        var selected = document.querySelector('.demo-menu-item.selected');
        if (selected) {
            angular.element(selected).focus();
        } else {
            angular.element(document.querySelectorAll('.demo-menu-item')[0]).focus();
        }
    });
}

PanelMenuCtrl.prototype.selectDessert = function (dessert) {
    this.selected.favoriteDessert = dessert;
    this._mdPanelRef && this._mdPanelRef.close().then(function () {
        angular.element(document.querySelector('.demo-menu-open-button')).focus();
    });
};

PanelMenuCtrl.prototype.onKeydown = function ($event, dessert) {
    var handled, els, index, prevIndex, nextIndex;
    switch ($event.which) {
        case 38: // Up Arrow.
            els = document.querySelectorAll('.demo-menu-item');
            index = indexOf(els, document.activeElement);
            prevIndex = (index + els.length - 1) % els.length;
            els[prevIndex].focus();
            handled = true;
            break;

        case 40: // Down Arrow.
            els = document.querySelectorAll('.demo-menu-item');
            index = indexOf(els, document.activeElement);
            nextIndex = (index + 1) % els.length;
            els[nextIndex].focus();
            handled = true;
            break;

        case 13: // Enter.
        case 32: // Space.
            this.selectDessert(dessert);
            handled = true;
            break;

        case 9: // Tab.
            this._mdPanelRef && this._mdPanelRef.close();
    }

    if (handled) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
    }

    function indexOf(nodeList, element) {
        for (var item, i = 0; item = nodeList[i]; i++) {
            if (item === element) {
                return i;
            }
        }
        return -1;
    }
};
});