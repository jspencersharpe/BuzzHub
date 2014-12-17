;(function(){
  //'use strict';

  angular.module('buzzHub')
      .controller('ChangePasswordController', function($scope, $location, authFactory){
        var vm = this;
        vm.changePassword = function(){
          authFactory.changePassword(vm.oldPassword, function(){
            $location.path('/logout');
            $scope.$apply();
          })
        };
      })
      .controller('LoginController', function(authFactory, $scope, $location){
      var vm = this;

      vm.login = function(){
        authFactory.login(vm.email, vm.password, function(){
          $location.path('/findshops')
          $scope.$apply();
        });
      };

      vm.register = function(){
        authFactory.register(vm.email, vm.password, function(){
          vm.login();
        });
      };

      vm.forgotPassword = function(){
        authFactory.resetPassword(vm.email);
      };
     })
      .controller('LogoutController', function($scope, $location, authFactory){
        authFactory.logout(function(){
          $location.path('/login');
          $scope.$apply('/login');
        });
      })

}());
