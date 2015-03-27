angular.module('buzzHub')
.controller('HeaderController', ['$rootScope', 'localStorageService', '$location', 
    function ($rootScope, localStorageService, $location) {
        $rootScope.logout = function () {
            $rootScope.auth = null;
            localStorageService.remove('auth');
            $location.path('/');
                    }
    }

])