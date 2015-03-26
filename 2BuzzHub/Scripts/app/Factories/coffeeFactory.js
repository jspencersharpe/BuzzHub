'use strict';
angular.module('buzzHub')
    .factory('Coffee', ['$resource', '$rootScope', '$http', '$location', function ($resource, $rootScope, $http, $location) {
        return {
            get: function () {
                return $resource('api/Coffee/:id').query();
            }
        }
     
    }]);
