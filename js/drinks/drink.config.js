;(function(){
  'use strict';

  angular.module('buzzHub')
    .config(function($routeProvider){
      $routeProvider
      .when('/drinks', {
        templateUrl: 'views/table.html',
        controller: 'CoffeeController',
        controllerAs: 'coffee',
        private: true
      })
      .when('/drinks/new', {
        templateUrl: 'views/form.html',
        controller: 'CoffeeController',
        controllerAs: 'coffee',
        private: true
      })
      .when('/drinks/new/upload', {
        templateUrl: 'views/upload.html',
        controller: 'Upload',
        controllerAs: 'upload',
        private: true
      })
      .when('/drinks/:id', {
        templateUrl: 'views/show.html',
        controller: 'ShowController',
        controllerAs: 'show',
        private: true
      })
      .when('/drinks/:id/edit', {
        templateUrl: 'views/form.html',
        controller: 'EditController',
        controllerAs: 'coffee',
        private: true
      })
    })
}());
