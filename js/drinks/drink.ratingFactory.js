/*;(function(){
  
  angular.module('buzzHub')
    .factory('ratingFactory', function($rootScope, $location, FIREBASE_URL, $http){

    function _ratingsUrl(id) {
      var reg = /\d+/;
      if (id) {
          return FIREBASE_URL + '/users/' + '/simplelogin:' + reg + '/' + '/drinks.json?auth=/' + id + '/rating/';
        } else {
          console.log("error")       
        }
      }

    function getRating (id, cb) {
        $http.get(_ratingsUrl(id))
        .success(function(data){
          cb(data);
        })
        .error(function(err){
          console.log(err);
        });
      }

    //indexOf(ratingOptions) divided by number of ratings.

    })
}()); */
