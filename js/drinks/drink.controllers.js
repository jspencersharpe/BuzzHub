;(function(){
  'use strict';

  angular.module('buzzHub')
    .controller('ShowController', function($routeParams, coffeeFactory, dataFactory){
      var vm = this;
      var id = $routeParams.id;
      coffeeFactory.getCoffee(id, function(data){
        vm.drink = data;
      });
    })

    .controller('MyCtrl', ['$scope', 'fileUpload', function($scope, fileUpload, FIREBASE_URL){
    
    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' + JSON.stringify(file));
        fileUpload.uploadFileToUrl(file, FIREBASE_URL);
    };
    
    }])
  
    .controller('EditController', function($routeParams, dataFactory, coffeeFactory){
      var vm = this;
      var id = $routeParams.id;

      coffeeFactory.getCoffee(id, function(data){
        vm.newDrink = data;
      });

      vm.addNewDrink = function(){
        coffeeFactory.editCoffee(id, vm.newDrink);
      };

      vm.menuOptions = coffeeFactory.menuOptions;

      vm.ratingOptions = coffeeFactory.ratingOptions;

    })
    .controller('CoffeeController', function(coffeeFactory, $scope, dataFactory){
       var vm = this;
      
       dataFactory.getData(function(items){
        vm.items = _.uniq(items);
        $scope.$digest();
      })
    
     coffeeFactory.getAllDrinks(function(data){
        vm.drinks = data;
      });

      vm.addNewDrink = function(){
        coffeeFactory.createCoffee(vm.newDrink, function(data){
          vm.drinks = vm.drinks || {};
          vm.drinks[data.name] = vm.newDrink;
          vm.newDrink = _freshDrink();
        });
      };

      vm.removeCoffee = function(coffeeId) {
        coffeeFactory.deleteCoffee(coffeeId, function(){
          delete vm.drinks[coffeeId];
        });
      };

      vm.newDrink = _freshDrink();

      vm.menuOptions = coffeeFactory.menuOptions;

      vm.ratingOptions = coffeeFactory.ratingOptions;

      function _freshDrink(){
        return {
          drink: 'coffee',
        };
      }

    });
   
}());
