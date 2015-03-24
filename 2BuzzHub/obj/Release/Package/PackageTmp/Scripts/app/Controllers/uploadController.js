//'use strict';
//angular.module('buzzHub')
//.controller('UploadController', ['$rootScope', '$scope', '$routeParams',
//                                function ($rootScope, $scope, $routeParams) {
//                                    var vm = this,
//                                        id = $routeParams.id;

//                                    vm.imageUrl = 'https://buzzhub.s3.amazonaws.com/' + $rootScope.user + '/' + id + '.jpg';

//                                    vm.fileSelected = function (files) {
//                                        _setThumbnail(files[0], function (base64) {
//                                            $scope.$parent.coffee.files[0].dataUrl = base64;
//                                            $scope.$apply();
//                                        });
//                                    };

//                                    vm.uploadFile = function () {
//                                        console.log('up')
//                                        var file = $scope.$parent.coffee.files[0];
//                                        upload.uploadPhoto(file, $rootScope.user.uid, id);
//                                    };

//                                    function _setThumbnail(image, cb) {
//                                        _imageToBase64(image, function (data) {
//                                            cb(data)
//                                        });
//                                    }

//                                    function _imageToBase64(file, cb) {
//                                        if (file && file.type.indexOf('image') > -1) {
//                                            var fr = new FileReader();
//                                            fr.readAsDataURL(file);
//                                            fr.onload = function (e) {
//                                                cb(e.target.result);
//                                            }
//                                        }
//                                    }
//                                }])
//    .factory('uploadPhotoFactory', ['$upload',
//                          function ($upload) {
//                              var factory = {}

//                              factory.uploadPhoto = function (file, userId, coffeeId, cb) {
//                                  $upload.upload({
//                                      url: 'https://buzzhub.s3.amazonaws.com',
//                                      method: 'POST',
//                                      data: {
//                                          'Content-Type': file.type,
//                                          key: userId + '/' + coffeeId + '.jpg',
//                                          acl: 'public-read',
//                                          awsaccesskeyid: 'AKIAJZ42ZVYZILDNSAJQ',
//                                          policy: 'eyJleHBpcmF0aW9uIjoiMjAyMC0wMS0wMVQwMDowMDowMFoiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJidXp6aHViIn0seyJhY2wiOiAicHVibGljLXJlYWQifSxbInN0YXJ0cy13aXRoIiwiJENvbnRlbnQtVHlwZSIsIiJdLFsic3RhcnRzLXdpdGgiLCIka2V5IiwiIl1dfQ==',
//                                          signature: 'zs/+bYf4kenwRdEtC1NfpNmv+ik=',
//                                          file: file
//                                      }
//                                  })
//                                    .success(function (data, status, headers, config) {
//                                        typeof cb === 'function' && cb();
//                                    });
//                              };

//                              return factory;
//                          }])