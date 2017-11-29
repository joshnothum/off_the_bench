var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngAria', 'ngAnimate']);

/// Routes ///
myApp.config(function ($routeProvider, $locationProvider, $mdThemingProvider, $mdIconProvider) {

  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();


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
      controller: 'CreateController as cc',
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

    })
    .otherwise({
      redirectTo: 'home'
    });
});


