myApp.service('UserService', function($http, $location){
  console.log('UserService Loaded');
  var self = this;
  self.userObject = {};
  self.gameObject = {};

  self.getuser = function(){
    console.log('UserService -- getuser');
    $http.get('/user').then(function(response) {
      console.log(response.data);
        if(response.data.username) {
            // user has a curret session on the server
            self.userObject.userName = response.data.username;
            self.userObject.userID = response.data.userID;
            
            
            console.log('UserService -- getuser -- User Data: ', self.userObject.userName);
        } else {
            console.log('UserService -- getuser -- failure');
            // user has no session, bounce them back to the login page
            $location.path("/home");
        }
    },function(response){
      console.log('UserService -- getuser -- failure: ', response);
      $location.path("/home");
    });
  },

  self.logout = function() {
    console.log('UserService -- logout');
    $http.get('/user/logout').then(function(response) {
      console.log('UserService -- logout -- logged out');
      $location.path("/home");
    });
  };

self.getUserGames = function () {
  $http.get('/info/user').then(function (success) {

    console.log(success.data);
    self.gameObject.data = success.data;
    
    

  }).catch(function (error) {
    console.log('error in getUserGames:', error);
});

};// end of getUserGames
  self.browseGames = function () {
    $http.get('/info').then(function (response) {
      console.log('hitting this path');
      
    }).catch(function (error) {
      console.log('error in browseGames:', error);
    });
  };//end of browseGames
});
