var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngAria', 'ngAnimate', 'ngMap', 'ui.bootstrap']);

/// Routes ///
myApp.config(function ($routeProvider, $locationProvider, $mdThemingProvider, $mdIconProvider) {

  $locationProvider.hashPrefix('');
  console.log('myApp -- config');
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as lc',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/games', {
      templateUrl: '/views/templates/games.html',
      controller: 'GameController as gameInfo',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })

    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })

    .when('/places', {
      templateUrl: '/views/templates/places.html',
      controller: 'PlacesController as place',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/create', {
      templateUrl: '/views/templates/create.html',
      controller: 'CreateController as create',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }

    }).when('/browse', {
      templateUrl: '/views/templates/browse.html',
      controller: 'BrowseController as browser',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }

    }).when('/location', {
      templateUrl: '/views/templates/location.html',
      controller: 'PlacesController as place',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }

    })
    .when('/calendar', {
      templateUrl: '/views/templates/calendar.html',
      controller: 'CalendarController as cc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    }).when('/dialog', {
      templateUrl: '/views/templates/dialog.html',
      controller: 'DialogController as dc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }

    }).when('/table', {
      templateUrl: '/views/templates/table.html',
      controller: 'TableController as tc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/about', {
      templateUrl: '/views/templates/about.html',
      controller: 'TableController as tc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    }).when('/courtInfo', {
      templateUrl: 'courtInfo',
      controller: 'CourtController as cc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .otherwise({
      redirectTo: 'home'
    });





  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey', {

    })
    .accentPalette('orange');


});
