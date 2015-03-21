'use strict';
angular.module('buzzhub')
app.controller('logincontroller', ['$scope', '$location', 'authservice', function ($scope, $location, authservice) {

    $scope.logindata = {
        username: "",
        password: ""
    };

    $scope.message = "";

    $scope.login = function () {

        authservice.login($scope.logindata).then(function (response) {

            $location.path('/orders');

        },
         function (err) {
             $scope.message = err.error_description;
         });
    };

}]);