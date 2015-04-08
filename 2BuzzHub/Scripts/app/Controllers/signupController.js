'use strict';
angular.module('buzzHub')
.controller('SignupController', ['$scope', '$location', 'authService',
    function ($scope, $location, authService) {

        $scope.signup = function () {
            var usr = $scope.user;
            authService.register(usr).then(
                    function (res) {
                        authService.login({ username: usr.Email, password: usr.Password })
                        .then(function () {
                            $location.path('landing');
                        }, function (err) {
                            console.log(err);
                        });
                    },
                    function (err) {
                        err = err.data.ModelState;
                        for (var key in err) {
                            err[key].forEach(function (el) {
                                $scope.errors.push(el);
                            })
                        }
                    }
                );
                $scope.user = {};
            };

        }])