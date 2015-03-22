'use strict';
angular.module('buzzHub')
app.factory('authService', ['$http', '$q', 'localStorageService', function ($http, $q, localStorageService) {

    var serviceBase = 'api/Account';
    var auths = {};

    function _register(user) {
        return $http.post(serviceBase + 'Register', user);
    }

    function _login(user) {
        user.grant_type = 'password';
        var deferred = $q.defer();

        $.post('/Token', user)
        .then(function (data) {
            localStorageService.set('auth', {
                token: data.access_token,
                name: user.username
            });
            deferred.resolve(data);
        }, function (err) {
            deferred.reject(err);
            console.log(err);
        });

        return deferred.promise;
    }

    auths.login = _login;
    auths.register = _register;

    return auths;

}]);