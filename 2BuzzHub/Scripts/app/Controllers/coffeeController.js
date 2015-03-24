'use strict';
angular.module('buzzHub')
app.controller('coffeeController', ['dataFactory', 'localStorageService', 'Coffee', '$scope', '$http', '$location', function (dataFactory, localStorageService, Coffee, $scope, $http, $location) {

    $scope.coffee = {};

    //Foursquare API
    dataFactory.getData(function (items) {
        $scope.items = _.uniq(items);
        $scope.$digest();
    });

    //GET
    $scope.drinks = Coffee.get();
    console.log($scope.drinks);
                                
    //POST
    $scope.postCoffee = function () {

        $http.post('api/Coffee', $scope.coffee)
        .catch(function (error) {
            console.log(error);
        })
    };

   // DELETE
    //$scope.deleteCoffee = function (index) {
    //    $scope.drinks[index].$delete();
    //    $scope.drinks.splice(index, 1);
    //}

    $scope.deleteCoffee = function (index) {
        $http.$delete('api/Coffee/id', $scope.coffee)
        $scope.drinks[index]
        $scope.drinks.splice(index, 1);
    }

    //$scope.deleteCoffee = function (id) {
    //    Coffee.deleteCoffee({ id: id });
    //}

    ////DELETE 2
    //$scope.deleteCoffee = function () {
    //    $http.post('api/Coffee', $scope.coffee)
    //    $scope.drinks.splice(index, 1);
    //}

    //$scope.deleteCoffee = function (coffee) {
    //    coffee.remove(); {
 
    //    };
    //}

                              

  
}]);

//; (function () {
//    'use strict';

//    angular.module('buzzHub')
//     .controller('ShowController', ['$routeParams', 'coffeeFactory', 'dataFactory', /*'uploadPhotoFactory',*/
//                           function ($routeParams, coffeeFactory, dataFactory /*, uploadPhotoFactory */) {
//                               var vm = this;
//                               var id = $routeParams.id;
//                               coffeeFactory.getCoffee(id, function (data) {
//                                   vm.drink = data;
//                                   vm.drink.id = id;
//                               });
//                           }])

//    .controller('EditController', ['$routeParams', 'dataFactory', 'coffeeFactory', /*'uploadPhotoFactory',*/
//                          function ($routeParams, dataFactory, coffeeFactory /*, uploadPhotoFactory */) {
//                              var vm = this;
//                              var id = $routeParams.id;

//                              coffeeFactory.getCoffee(id, function (data) {
//                                  vm.newDrink = data;
//                              });

//                              vm.addNewDrink = function () {
//                                  coffeeFactory.editCoffee(id, vm.newDrink);
//                              };

//                              vm.menuOptions = coffeeFactory.menuOptions;

//                          }])
//      .controller('coffeeController', ['coffeeFactory', '$scope', '$rootScope', 'dataFactory', /*'uploadPhotoFactory',*/
//                              function (coffeeFactory, $scope, $rootScope, dataFactory /*, uploadPhotoFactory*/) {
//                                  var vm = this;

//                                  dataFactory.getData(function (items) {
//                                      vm.items = _.uniq(items);
//                                      $scope.$digest();
//                                  })

//                                  coffeeFactory.getAllDrinks(function (data) {
//                                      vm.drinks = data;
//                                  });

//                                  vm.addNewDrink = function () {
//                                      coffeeFactory.createCoffee(vm.newDrink, function (data) {
//                                          vm.drinks = vm.drinks || {};
//                                          vm.drinks[data.name] = vm.newDrink;
//                                          uploadPhotoFactory.uploadPhoto(vm.files[0], $rootScope.user.uid, data.name)
//                                          vm.newDrink = _freshDrink();
//                                      });
//                                  };

//                                  vm.removeCoffee = function (coffeeId) {
//                                      coffeeFactory.deleteCoffee(coffeeId, function () {
//                                          delete vm.drinks[coffeeId];
//                                      });
//                                  };

//                                  vm.newDrink = _freshDrink();

//                                  vm.menuOptions = coffeeFactory.menuOptions;

//                                  function _freshDrink() {
//                                      return {
//                                          drink: 'coffee',
//                                      };
//                                  }

//                              }]);

//})();
