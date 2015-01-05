angular.module('buzzHub')

.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}])

.service('fileUpload', ['$http', function ($http, FIREBASE_URL) {
    this.uploadFileToUrl = function(file, FIREBASE_URL){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(FIREBASE_URL, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined,
                      'Access-Control-Allow-Origin': '*'},
                 })
        .success(function(){
        })
        .error(function(){
        });
    }
}])

.controller('Upload', ['$scope', '$routeParams', 'fileUpload', 'FIREBASE_URL', function($scope, $routeParams, fileUpload, FIREBASE_URL){
    
    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' + JSON.stringify(file));
        fileUpload.uploadFileToUrl(file, FIREBASE_URL);
    };
    
}])



