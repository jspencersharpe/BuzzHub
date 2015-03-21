﻿'use strict';
angular.module('buzzHub')
app.controller('coffeeController', ['dataFactory', 'localStorageService', 'Coffee','$scope', function (dataFactory, localStorageService, Coffee, $scope) {
    var vm = this;

    dataFactory.getData(function (items) {
        vm.items = _.uniq(items);
        $scope.$digest();
    });

    $scope.getAllCoffees = function () {
        coffee.get($scope.coffee);
    };

    $scope.postCoffee = function() {
        Coffee.save($scope.coffee);
    };




   // $scope.coffee = [];



    //coffeeService.getCoffee().then(function (results) {

    //    $scope.coffee = results.data;

  
        //alert(error.data.message);
  

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