'use strict';
angular.module('buzzHub')
.factory('authService', ['$http', '$q', 'localStorageService',
                 function($http,   $q,   localStorageService){

                     var base = '/api/Account/';
                     var as = {};
                     function _register(user){
                         return $http.post(base + 'Register', user);
                     }
                     function _login(user){
                         user.grant_type = 'password';
                         var deferred = $q.defer()

                         $.post('/Token', user)
                         .then(function(data){
                             localStorageService.set('auth', {
                                 token: data.access_token,
                                 name: user.username
                             });
                             deferred.resolve(data); 
                         }, function(err){
                             deferred.reject(err); 
                             console.log(err);
                         });

                         return deferred.promise;
                     }

                     as.login = _login;
                     as.register = _register;

                     return as;
                 }]);