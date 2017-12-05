myApp.service('GameService', function ($http, $location) {
    let self = this;
    //globalNonsense
    self.result = {};
    // for getPlaces
    self.browseGamesObject = {};
    self.gameLocationInfo = {};
    //getMorGameInfo
    self.gameByIDInfo = {};
    self.newGame = {};
    self.newLocation = {};
    self.photo = {};
    self.gameFromBrowse = {};

    self.getPlaces = function (apiSearch) {
        $http.get('/places', apiSearch).then(function (response) {
            self.result.data = response.data.results;
            console.log(self.result.data);
        }).catch(function (response) {
            console.log('my places failed: ', response);
        });
    };// end of getPlaces

    //below may be moved to gameService
    self.getGameLocate = function (location) {

        $http.get('/info/getMoreGameInfo/' + location).then(function (response) {
            self.gameLocationInfo = response.data.result;
            console.log(self.info);
        }).catch(function (response) {
            console.log('my info failed: ', response);
        });
    };//end of getMoreGameInfo
    self.sendGame = function (gameInfo) {
        console.log(gameInfo);

        $http.post('/places', gameInfo).then(function (response) {


            console.log(response);
            $location.path('/browse');

        }).catch(function (response) {
            console.log('send game did not work: ', response);
        });
    };//end of sendGame

    self.joinGame = function (playerJoin) {
        $http.post('/info', playerJoin).then(function (response) {
            console.log(response);
            $location.path('/user');
        }).catch(function (response) {
            console.log('joinGame did not work', response);
        });//end of post/catch
    };//end of joinGame

    self.browseGames = function () {
        $http.get('/info').then(function (success) {
            console.log(success.data);
            self.browseGamesObject.data = success.data;


        }).catch(function (error) {
            console.log('error in browseGames:', error);
        });//end of catch
    };//end of browseGames
    self.unJoinGames = function (playerUnJoin) {
        console.log(playerUnJoin);

        $http.delete('/info/' + playerUnJoin).then(function (response) {
            console.log(response);
            $location.path('/user');
        }).catch(function (response) {
            console.log('UnJoinGame did not work', response);
        });//end of post/catch
    };//end of unjoinGame

    self.getGameInfo = function (games, gameID) {
        self.gameFromBrowse = games;
        console.log(gameID);
        return $http.get('/info/getGameById/' + gameID).then(function (response) {
            console.log(response);
            self.gameByIDInfo.data = response.data;
            console.log(response.data);
            console.log(self.gameByIDInfo);
        }).catch(function (response) {
            console.log('getGameInfo failed: ', response);
        });
    };

});//end of GameService