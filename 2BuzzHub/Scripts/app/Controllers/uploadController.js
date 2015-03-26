'use strict';
angular.module('buzzHub')
    .factory('uploadPhotoFactory', ['$upload', function ($upload) {
        var factory = {}

        factory.uploadPhoto = function (file, coffeeId, fileName, cb) {
            var file = filesArray[0];
           
        }

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
        return factory;
        

    }])