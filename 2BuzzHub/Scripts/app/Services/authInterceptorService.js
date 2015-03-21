'use strict';
angular.module('buzzHub')
app.factory('authInterceptorService', ['$q', '$location', 'localStorageService', function ($q, $location, localStorageService) {

    return {
        request: function (config) {
            config.headers = config.headers || {};

            var authData = localStorageService.get('auth')

            if (authData)
                config.headers.Authorization = 'Bearer' + authData.token;

            return config;
        },
        responseError: function (rejection) {
            if (rejection.status == 401) {
                $location.url('login');
            }
            return $q.reject(rejection);
        }
    }
}]);