'use strict';
angular.module('buzzHub')
app.controller('homeController', ['$scope', function ($scope) {
    var auth = localStorageService.get('auth');
    if (auth) {
        $location.path('coffees');
    }
}]);