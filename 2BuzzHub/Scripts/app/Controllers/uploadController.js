'use strict';
angular.module('buzzHub')
    .factory('uploadPhotoFactory', ['$upload', function ($upload) {
        var factory = {}

        factory.uploadPhoto = function (file, coffeeId, fileName, cb) {
            var file = filesArray[0];
            $upload.upload({
                url: 'https://buzzhub.s3.amazonaws.com/dotnetimages',
                method: 'POST',
                data: {
                    'Content-Type': file.type,
                    acl: 'public-read',
                    awsaccesskeyid: 'AKIAJZ42ZVYZILDNSAJQ',
                    policy: 'eyJleHBpcmF0aW9uIjoiMjAyMC0wMS0wMVQwMDowMDowMFoiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJidXp6aHViIn0seyJhY2wiOiAicHVibGljLXJlYWQifSxbInN0YXJ0cy13aXRoIiwiJENvbnRlbnQtVHlwZSIsIiJdLFsic3RhcnRzLXdpdGgiLCIka2V5IiwiIl1dfQ==',
                    signature: 'zs/+bYf4kenwRdEtC1NfpNmv+ik=',
                    file: file
                },
                fields: {
                    key: coffeeId + '/' + fileName
                },

            })
            .success(function (data, status, headers, config) {
                var filelink = 'https://buzzhub.s3.amazonaws.com/dotnetimages' + coffeeId + '/' + config.file.name;
                cb(filelink)
            })
            .error(function (err) {
                console.log('s3 problem', err);
            })
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