'use strict';
angular.module('buzzHub')
app.controller('HomeController', ['localStorageService', '$location',
                           function (localStorageService, $location) {
    var auth = localStorageService.get('auth');
    if (auth) {
        $location.path('table');
    }
}]);