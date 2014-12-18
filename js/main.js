;(function(){
  'use strict';

  angular.module('buzzHub', ['ngRoute', 'mgcrea.ngStrap'])
    
    $('li').click(function(){
      var shop = this.textContent
      $('h1.current-shop').append(this);
    })
}());

