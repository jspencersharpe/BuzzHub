;(function(){
  'use strict';

  angular.module('buzzHub')
    .controller('ShowController', function($routeParams, todoFactory){
      var vm = this;
      var id = $routeParams.id;
      coffeeFactory.getCoffee(id, function(data){
        vm.task = data;
      });
    })
    .controller('EditController', function($routeParams, coffeeFactory){
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
    .controller('CoffeeController', function(coffeeFactory){
       var vm = this;

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
          menu: 'coffee',
          rating: 'oneStar'
        };
      }

    });
    
}());
