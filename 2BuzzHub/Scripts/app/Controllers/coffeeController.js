'use strict';
angular.module('buzzHub')
app.controller('coffeeController', ['dataFactory', 'localStorageService', 'Coffee', '$scope', '$http', '$location', '$rootScope', 'uploadPhotoFactory', '$upload',
                            function (dataFactory, localStorageService, Coffee, $scope, $http, $location, $rootScope, uploadPhotoFactory, $upload) {

    $scope.coffee = {};
    var vm = this;

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

    $scope.deleteCoffee = function (id) {
        
        Coffee.deleteCoffee({id: id});
    }

    vm.uploadFile = function () {
        console.log('up')
        upload.uploadPhoto(file, $rootScope, coffeeId);
    };

    vm.uploadPhoto = function (coffeeId, cb) {
        var file = $scope.coffee.imagePath[0];
        $upload.upload({
            url: 'https://buzzhub.s3.amazonaws.com/dotnetimages',
            method: 'POST',
            data: {
                'Content-Type': file.type,
                key: $scope.$parent.coffeeId + '/' + file.name,
                acl: 'public-read',
                awsaccesskeyid: 'AKIAJZ42ZVYZILDNSAJQ',
                policy: 'eyJleHBpcmF0aW9uIjoiMjAyMC0wMS0wMVQwMDowMDowMFoiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJidXp6aHViIn0seyJhY2wiOiAicHVibGljLXJlYWQifSxbInN0YXJ0cy13aXRoIiwiJENvbnRlbnQtVHlwZSIsIiJdLFsic3RhcnRzLXdpdGgiLCIka2V5IiwiIl1dfQ==',
                signature: 'zs/+bYf4kenwRdEtC1NfpNmv+ik=',
                file: file
                }
            })
               .success(function (data, status, headers, config) {
                   var filelink = 'https://buzzhub.s3.amazonaws.com/dotnetimages' + coffeeId + '/' + config.file.name;
                   cb(filelink)
               })
               .error(function (err) {
                   console.log('s3 problem', err);
               });
        }

        vm.fileSelected = function (files) {
            _setThumbnail(files[0], function (base64) {
                $scope.$parent.coffee.imagePath[0].dataUrl = base64;
                $scope.$apply();
            });
        };

        $('#uploadButton').on('click', function (e) {
            e.preventDefault();
            vm.uploadPhoto();
        });
                                  

  
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
