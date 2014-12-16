;(function(){
  'use strict';

  angular.module('buzzHub', [])

  var ref = new Firebase('https://buzzhub.firebaseio.com/');
  ref.createUser({
  email    : "bobtony@firebase.com",
  password : "correcthorsebatterystaple"
}, function(error) {
  if (error === null) {
    console.log("User created successfully");
  } else {
    console.log("Error creating user:", error);
  }
});

}());
