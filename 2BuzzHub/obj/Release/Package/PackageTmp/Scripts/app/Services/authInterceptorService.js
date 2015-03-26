'use strict';
angular.module('buzzHub')
app.factory('authInterceptorService', ['$location', '$q', 'localStorageService',
                              function ($location, $q, localStorageService) {

                                  return {
        request: function(config){
                        config.headers = config.headers || {};
                        console.log(config);
            
                        var authData = localStorageService.get('auth')
            
                        if(authData)
                            config.headers.Authorization = 'Bearer ' + authData.token;
                        
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


                      