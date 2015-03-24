﻿'use strict';
angular.module('buzzHub')
app.controller('LoginController', ['$scope', '$location', 'authService',
                            function ($scope, $location, authService) {
    $scope.login = function () {
        authService.login($scope.loginData)
            .then(function (data) {
            $location.path('home');
        },
         function (err) {

         });    
    };
}])