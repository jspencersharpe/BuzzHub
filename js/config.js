;(function(){
  'use strict';

  angular.module('buzzHub', [])
    .config(function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html'
      })
      .otherwise({redirectTo: '/'});
    })

}());
