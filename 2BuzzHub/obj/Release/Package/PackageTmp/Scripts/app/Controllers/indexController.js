'use strict';
angular.module('buzzHub')
app.controller('indexController', ['$rootScope', 'localStorageService', '$scope', '$location', 'authService', function ($rootScope, localStorageService, $scope, $location, authService) {

    $scope.logout = function () {
        $rootScope.auth = null;
        localStorageService.remove('auth');
        //authService.logout();
        $location.path('/login');
    }

    //$scope.authentication = authService.authentication;

}]);