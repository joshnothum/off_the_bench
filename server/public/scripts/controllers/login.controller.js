myApp.controller('LoginController', function ($http, $location, UserService, $scope) {
  console.log('LoginController created');
  var vm = this;
  vm.user = {
    username: '',
    password: '',
    email: ''
  };
  vm.testPass = '';
  vm.message = '';
  vm.login = function () {
    console.log('LoginController -- login');
    if (vm.user.username === '' || vm.user.password === '') {
      vm.message = "Enter your username and password!";
    } else {
      console.log('LoginController -- login -- sending to server...', vm.user);
      $http.post('/', vm.user).then(function (response) {
        if (response.data.username) {
          console.log('LoginController -- login -- success: ', response.data);
          // location works with SPA (ng-route)
          $location.path('/user'); // http://localhost:5000/#/user
        } else {
          console.log('LoginController -- login -- failure: ', response);
          vm.message = "Wrong!!";
        }
      }).catch(function (response) {
        console.log('LoginController -- registerUser -- failure: ', response);
        vm.message = "Wrong!!";
      });
    }
  };

  vm.registerUser = function () {
    console.log('LoginController -- registerUser');
    if (vm.user.username === '' || vm.user.password === '') {
      vm.message = "Choose a username and password!";
    } else {
      console.log('LoginController -- registerUser -- sending to server...', vm.user);
      $http.post('/register', vm.user).then(function (response) {
        console.log('LoginController -- registerUser -- success');
        $location.path('/home');
      }).catch(function (response) {
        console.log('LoginController -- registerUser -- error');
        vm.message = "Please try again.";
        $location.path('/user');
      });
    }
  };

  vm.getRegister = function () {
    console.log('getRegister got hit');
    $location.path('/register');

  };
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function () {
    var newWidth = 2200 + slides.length + 1;
    slides.push({
      image: '/photos/basketball-2258651_1920.jpg',
      id: currIndex++
    });
  };

  $scope.randomize = function () {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }


  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }


  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }
    return array;
  }
});
