myApp.service('UserService', function ($http, $location) {
  console.log('UserService Loaded');
  var self = this;
  //globalNonsense
  self.userObject = {};
  self.gameObject = {};
  self.allLocations = {};
  self.browseGamesObject={};
  self.editGame = {};
  
  

  self.getuser = function () {
    console.log('UserService -- getuser');
    $http.get('/user').then(function (success) {

      if (success.data.username) {
        // user has a curret session on the server
        self.userObject.userName = success.data.username;
        self.userObject.userID = success.data.userID;
        console.log('UserService -- getuser -- User Data: ', self.userObject.userName);
      } else {
        console.log('UserService -- getuser -- failure');
        // user has no session, bounce them back to the login page
        $location.path("/home");
      }
    }, function (success) {
      console.log('UserService -- getuser -- failure: ', success);
      $location.path("/home");
    });
  };//end of getUser
    self.logout = function () {
      console.log('UserService -- logout');
      $http.get('/user/logout').then(function (success) {
        console.log('UserService -- logout -- logged out');
        $location.path("/home");
      });
    };//end of logout
    self.getUserGames = function () {
      $http.get('/info/user').then(function (success) {
        self.gameObject.data = success.data;
      }).catch(function (error) {
        console.log('error in getUserGames:', error);
      });// end of get request for getUserGames
    };// end of getUserGames
});
