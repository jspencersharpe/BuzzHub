'use strict';
angular.module('buzzHub')
app.controller('coffeeController', ['dataFactory', 'localStorageService', 'Coffee', '$scope', '$http', '$location',
                            function (dataFactory, localStorageService, Coffee, $scope, $http, $location) {

    $scope.coffee = {};
    dataFactory.getData(function (items) {
        $scope.items = _.uniq(items);
        $scope.$digest();
    });

    //$scope.getAllCoffees = function () {

    //    $http.get('api/Coffee/')
    //        .then(function (result) {
    //            console(result);
    //        },
    //        function () {
    //            alert("error");
    //        });
                                //};

    $scope.getAllCoffees = function () {
        coffee.get($scope.coffee);
        console.log($scope.coffee);
    };

    $scope.postCoffee = function () {

        $http.post('api/Coffee', $scope.coffee)
        .catch(function (error) {
            console.log(error);
        })
        //Coffee.save($scope.coffee, null, function (error) {
        //    console.log(error);
        //});
    };
  
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
