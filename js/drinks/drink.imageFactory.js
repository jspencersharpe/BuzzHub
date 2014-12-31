angular.module('buzzHub')
  .directive('fileInput', ['$parse', function($parse){
        return {
          restrict: 'A',
          link:function(scope, element, attrs){
            element.bind('change', function(){
              $parse(attrs.fileInput)
              .assign(scope,element[0].drinks)
              scope.$apply()
            })
          }
        }
     }])
  .controller('uploader', ['$scope', '$http', 
      function($scope, $http, FIREBASE_URL) {
        $scope.filesChanged = function(element){
          $scope.drinks = element.files
          $scope.$apply();
        }
        $scope.upload = function() {
          var fd = new FormData()
          angular.forEach($scope.files, function(coffee){
            fd.append('file', file);
          })
          $http.post(FIREBASE_URL, fd, 
            {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined}
            }) 
              .success(function(d) {
                console.log(d)
              })
        }
      }    
      ])


/*
//inject angular file upload directives and service.
;(function(){
  angular.module('buzzHub')

.controller('MyCtrl', function($scope, $routeParams, coffeeFactory, $upload) {
  $scope.onFileSelect = function($files) {
    //$files: an array of files selected, each file has name, size, and type.
    for (var i = 0; i < $files.length; i++) {
      var file = $files[i];
      $scope.upload = $upload.upload({
        url: FIREBASE_URL, 
        method: 'POST',
        headers: {'header-key': 'header-value'},
        withCredentials: true,
        data: {myObj: $scope.myModelObj},
        file: file, // or list of files ($files) for html5 only
        //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
        // customize file formData name ('Content-Desposition'), server side file variable name. 
        //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file' 
        // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
        formDataAppender: function(formData, key, val){}
      }).progress(function(event) {
        console.log('percent: ' + parseInt(100.0 * event.loaded / event.total));
      }).success(function(data, status, headers, config) {
        // file is uploaded successfully
        console.log(data);
      });
      //.error(...)
      //.then(success, error, progress); 
      // access or attach event listeners to the underlying XMLHttpRequest.
      //.xhr(function(xhr){xhr.upload.addEventListener(...)})
    }
  };
});

}());

*/
