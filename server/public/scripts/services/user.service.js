myApp.service('UserService', function($http, $location){
  console.log('UserService Loaded');
  var self = this;
  self.userObject = {};
  self.gameObject = {};
  self.browseGamesObject = {};

  self.getuser = function(){
    console.log('UserService -- getuser');
    $http.get('/user').then(function(success) {
      console.log(success.data);
        if(success.data.username) {
            // user has a curret session on the server
            self.userObject.userName = success.data.username;
            self.userObject.userID = success.data.userID;
            
            
            console.log('UserService -- getuser -- User Data: ', self.userObject.userName);
        } else {
            console.log('UserService -- getuser -- failure');
            // user has no session, bounce them back to the login page
            $location.path("/home");
        }
    },function(success){
      console.log('UserService -- getuser -- failure: ', success);
      $location.path("/home");
    });
  },

  self.logout = function() {
    console.log('UserService -- logout');
    $http.get('/user/logout').then(function(success) {
      console.log('UserService -- logout -- logged out');
      $location.path("/home");
    });
  };

self.getUserGames = function () {
  $http.get('/info/user').then(function (success) {

    
    self.gameObject.data = success.data;
    
    

  }).catch(function (error) {
    console.log('error in getUserGames:', error);
});

};// end of getUserGames
  self.browseGames = function () {
    $http.get('/info').then(function (success) {
      console.log('browseGames made to the get');
      
      self.browseGamesObject.data = success.data;
      console.log(self.browseGamesObject.data);
      
    }).catch(function (error) {
      console.log('error in browseGames:', error);
    });

    // $location.path('/browse');
  };//end of browseGames
});
