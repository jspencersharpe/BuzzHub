;(function(){
  'use strict';

  angular.module('buzzHub', [])
    
    .config(function($routeProvider) {
      $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        controllerAs: 'login',
        resolve: {
          data:function(authFactory) {
            authFactory.disallowLogin();
          }
        }
      })
    }


    .factory('authFactory', function($routeScope, $location, FIREBASE_URL){
      var factory = {}
      ref = new Firebase(FIREBASE_URL);

      $routeScope.user = ref.getAuth();


    factory.login = function(email, pass, cb) {
      ref.authWithPassword({
        email: email,
        password: pass
      }, function (error, authData) {
        if (error === null) {
          console.log("successful login", authData);
          $rootScope.user = authData;
          ref.child('users').child(authData.uid).child('authData').set(authData);
          cb();
        } else {
          console.log("error logging in", error);
        }
      }
      );
    }
    
    })



    .controller('LoginController', function(authFactory, $scope, $location){
      var vm = this;

      vm.login = function(){
        authFactory.login(vm.email, vm.password, function(){
          $location.path('/findshops')
          $scope.$apply();
        });
      }
      
    })




  var ref = new Firebase('https://buzzhub.firebaseio.com/');
  ref.createUser({
  email    : "bobtony@firebase.com",
  password : "correcthorsebatterystaple"
}, function(error) {
  if (error === null) {
    console.log("User created successfully");
  } else {
    console.log("Error creating user:", error);
  }
});

}());
