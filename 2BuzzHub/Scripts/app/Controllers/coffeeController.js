; (function () {

    'use strict';
    angular.module('buzzHub')
    app.controller('coffeeController', ['dataFactory', 'localStorageService', 'Coffee', '$scope', '$http', '$location', '$rootScope', 'uploadPhotoFactory', '$upload', function (dataFactory, localStorageService, Coffee, $scope, $http, $location, $rootScope, uploadPhotoFactory, $upload) {

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

        //DELETE

        vm.removeCoffee = function (id) {
            coffeeFactory.deleteCoffee(coffeeId, function () {
                delete vm.coffees[coffeeId];
            })
        }

        vm.fileSelected = function (files) {
            _setThumbnail(files[0], function (base64) {
                $scope.$parent.coffee.files[0].dataUrl = base64;
                $scope.$apply();
            });
        };

        vm.uploadFile = function () {
            console.log('up')
            alert('image added!');
            var file = $scope.coffee.imagePath[0];
            uploadPhotoFactory.uploadPhoto(file, function (filelink) {
                $scope.coffee.imagePath = filelink;
            });
        };

        function _setThumbnail(image, cb) {
            _imageToBase64(image, function (data) {
                cb(data)
            });
        }

        function _imageToBase64(file, cb) {
            if (file && file.type.indexOf('image') > -1) {
                var fr = new FileReader();
                fr.readAsDataURL(file);
                fr.onload = function (e) {
                    cb(e.target.result);
                }
            }
        }

        $('#uploadButton').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            vm.uploadFile();
        });
    }])

       .factory('uploadPhotoFactory', ['$upload', function ($upload) {
           var factory = {}

           factory.uploadPhoto = function (file, cb) {
               // var file = filesArray[0];
               $upload.upload({
                   url: 'https://buzzhub.s3.amazonaws.com',
                   method: 'POST',
                   data: {
                       'Content-Type': file.type,
                       key: 'dotnetimages/' + file.name,
                       acl: 'public-read',
                       awsaccesskeyid: 'AKIAJZO3MXQYNUR5MGJQ',
                       policy: 'eyJleHBpcmF0aW9uIjoiMjAyMC0wMS0wMVQwMDowMDowMFoiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJidXp6aHViIn0seyJhY2wiOiAicHVibGljLXJlYWQifSxbInN0YXJ0cy13aXRoIiwiJENvbnRlbnQtVHlwZSIsIiJdLFsic3RhcnRzLXdpdGgiLCIka2V5IiwiIl1dfQ==',
                       signature: 'pT0seLTIFqiwuawmR++yCZbN/Q4=',
                       file: file
                   },
                   fields: {
                       key: 'dotnetimages/' + file.name
                   }
               })
                      .success(function (data, status, headers, config) {
                          var filelink = 'https://s3.amazonaws.com/buzzhub/dotnetimages' + '/' + file.name;
                          console.log('success');
                          cb(filelink)
                      })
                      .error(function (err) {
                          console.log('s3 problem', err);
                      });
           };
           return factory;

       }]);

})();





