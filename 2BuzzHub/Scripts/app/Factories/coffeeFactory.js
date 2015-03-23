'use strict';
angular.module('buzzHub')
    .factory('Coffee', ['$resource', '$rootScope', '$http', '$location', function ($resource, $rootScope, $http, $location) {

      return $resource('api/Coffee/:id', { id: '@id' });
     
    }]);

//;(function(){
//  'use strict';

//  angular.module('buzzHub')
//    .factory('coffeeFactory', ['$rootScope', '$http', '$location', function ($rootScope, $http, $location) {

//        function _coffeesUrl(id) {

//        }

//      function getCoffee(id, cb) {
//        $http.get(_coffeesUrl(id))
//        .success(function(data){
//          cb(data);
//        })
//        .error(function(err){
//          console.log(err);
//        });
//      }
   
//      function editCoffee(id, coffee){
//        $http.put(_coffeesUrl(id), coffee)
//        .success(function(data){
//          $location.path('/');
//        })
//        .error(function(err){
//          console.log(err);
//        });
//      }

//      //function getAllDrinks(cb){
//      //  $http.get(_coffeesUrl())
//      //  .success(function(data){
//      //    cb(data);
//      //  })
//      //  .error(function(error){
//      //    console.log(err);
//      //  });
//      //}

//      //function createCoffee(drink, cb){
//      //  $http.post(_coffeesUrl(), drink)
//      //  .success(function(data){
//      //    cb(data);
//      //  })
//      //  .error(function(err){
//      //    console.log(err);
//      //  });
//      //}

//      function deleteCoffee(coffeeId, cb) {
//        if (confirm("Are you sure you want to delete this drink?")) {
//          $http.delete(_coffeesUrl(coffeeId))
//            .success(function(){
//              cb();
//          })
//            .error(function(){
//              console.log(err);
//            });
//        }
//       }

//      var menuOptions = {
//        coffee: 'coffee',
//        espresso: 'espresso',
//        americano: 'americano',
//        latte: 'latte',
//        cappuccino: 'cappuccino',
//        cortado: 'cortado',
//        macchiato: 'macchiato',
//        other: 'other'
//      };
      
//      return {
//        getCoffee: getCoffee,
//        editCoffee: editCoffee,
//        //getAllDrinks: getAllDrinks,
//       // createCoffee: createCoffee,
//        deleteCoffee: deleteCoffee,
//        menuOptions: menuOptions,
 
//      };
//    }])
//})();
