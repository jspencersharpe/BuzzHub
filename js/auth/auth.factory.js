;(function(){
  'use strict';

  angular.module('buzzHub')
    .factory('authFactory', function($rootScope, $location, FIREBASE_URL){
      var factory = {},
        ref = new Firebase(FIREBASE_URL);

      $rootScope.user = ref.getAuth();

      factory.requireLogin = function(){
        if(!_isLoggedIn()) {
          $location.path('/login');
        } else if (_hasTemporaryPassword()) {
          $location.path('/changepassword');
        }
      };

      factory.disallowLogin = function(){
        if(_isLoggedIn()) {
          $location.path('/findshops')
        }
      };

      function _isLoggedIn(){
        return Boolean(ref.getAuth());
      }

      function _hasTemporaryPassword(){
        return ref.getAuth().password.isTemporaryPassword;
      }

      factory.changePassword = function(oldPass, newPass, cb){
        ref.changePassword({
          email : ref.getAuth().password.email,
          oldPassword : oldPass,
          newPassword : newPass,
        }, function(error) {
          if (error === null) {
            //console.log('Password changed successfully');
            alert('Password changed successfully');
            cb();
          } else {
            //console.log('Error changing password', error);
            alert('Error changing password');
          }
        }
       );
      };

      factory.login = function(email, pass, cb){
        ref.authWithPassword({
          email : email,
          password : pass
        }, function(error, authData) {
          if (error === null) {
            console.log('Login Successful');
            $rootScope.user = authData;
            ref.child('users').child(authData.uid).child('authData').set(authData);
            cb();
          } else {
            console.log('Error Logging in', error)
          }
        }
       );
      };

      factory.logout = function(cb) {
        ref.unauth(function(){
          $rootScope.user = null;
          cb();
        });
      };

      factory.register = function(email, pass, cb) {
        ref.createUser({
          email : email,
          password: pass
        }, function(error, authData) {
          if (error === null) {
          console.log("user created successfully", authData);
          cb();
        } else {
          console.log("error creating user", error);
        }
       }        
      );
     };

      factory.resetPassword = function(email) {
        ref.resetPassword({
          email : email,
        }, function(error) {
          if (error === null) {
          alert("password reset email sent successfully");
        } else {
          alert("error sending password reset email", error);
        }
        }
       );
      };

      return factory;
     })

}());
