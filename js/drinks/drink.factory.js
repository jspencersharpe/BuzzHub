;(function(){
  'use strict';

  angular.module('buzzHub')
    .factory('coffeeFactory', function($rootScope, FIREBASE_URL, $http, $location){
      
      function _coffeesUrl(id) {
        if (id) {
          return FIREBASE_URL + '/users/' + $rootScope.user.uid +
            '/drinks/' + id + '.json?auth=' + $rootScope.user.token;
        } else {
          return FIREBASE_URL + '/users/' + $rootScope.user.uid +
            '/drinks.json?auth=' + $rootScope.user.token;
        }

      }

      function getCoffee(id, cb) {
        $http.get(_coffeesUrl(id))
        .success(function(data){
          cb(data);
        })
        .error(function(err){
          console.log(err);
        });
      }

      function editCoffee(id, coffee){
        $http.put(_coffeesUrl(id), coffee)
        .success(function(data){
          $location.path('/');
        })
        .error(function(err){
          console.log(err);
        });
      }

      function getAllDrinks(cb){
        $http.get(_coffeesUrl())
        .success(function(data){
          cb(data);
        })
        .error(function(error){
          console.log(err);
        });
      }

      function createCoffee(drink, cb){
        $http.post(_coffeesUrl(), drink)
        .success(function(data){
          cb(data);
        })
        .error(function(err){
          console.log(err);
        });
      }

      function deleteCoffee(coffeeId, cb){
        $http.delete(_coffeesUrl(coffeeId))
        .success(function(){
          cb();
        })
        .error(function(err){
          console.log(err);
        });
      }

      var menuOptions = {
        coffee: 'coffee',
        latte: 'latte',
        cappuccino: 'cappuccino',
        espresso: 'espresso',
        other: 'other'
      };

      var ratingOptions = {
        oneStar: '&#9734;',
        twoStar: '&#9734;' + '&#9734;',
        threeStar: '&#9734;' + '&#9734;' + '&#9734;',
        fourStar: '&#9734;' + '&#9734;' + '&#9734;' + '&#9734;',
        fiveStar: '&#9734;' + '&#9734;' + '&#9734;' + '&#9734;' + '&#9734;'
      };

      return {
        getCoffee: getCoffee,
        editCoffee: editCoffee,
        getAllDrinks: getAllDrinks,
        createCoffee: createCoffee,
        deleteCoffee: deleteCoffee,
        menuOptions: menuOptions,
        ratingOptions: ratingOptions
      };
    })
}());
