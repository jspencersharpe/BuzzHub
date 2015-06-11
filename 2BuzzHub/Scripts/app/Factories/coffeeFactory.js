'use strict';
angular.module('buzzHub')
    .factory('Coffee', ['$resource', '$rootScope', '$http', '$location', function ($resource, $rootScope, $http, $location) {

        function deleteCoffee(coffeeId, cb) {
            $http.delete('api/Coffee/id', coffee)
                .success(function (data) {
                    cb(data);
                })
                .error(function (error) {
                    console.log(error);
                })
        }

        return {
            get: function () {
                return $resource('api/Coffee/:id').query();
            },
            deleteCoffee : deleteCoffee
        }
     
    }]);
