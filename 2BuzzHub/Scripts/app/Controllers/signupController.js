'use strict';
angular.module('buzzHub')
.controller('SignupController', ['$scope', '$location', 'authService',
                        function ($scope, $location, authService) {

                             $scope.signup = function () {
                                 authService.register($scope.user).then(
                                     function (res) {
                                         console.log(res);
                                     },
                                     function (err) {
                                         console.log(err);
                                         $scope.errors = [];
                                         ers = err.data.ModelState;
                                         for (var key in ers) {
                                             ers[key].forEach(function (el) {
                                                 $scope.errors.push(el);
                                             })
                                         }
                                     }
                                 );
                                 $scope.user = {};
                             };

                         }])