﻿var app = angular.module('buzzHub', ['ngRoute', 'ngResource', 'angularFileUpload', 'LocalStorageModule', 'angular-loading-bar']);

app.config(function ($routeProvider) {

    $routeProvider.when('/home', {
        controller: 'HomeController',
        templateUrl: '/Static/Views/home.html'
    });

    $routeProvider.when('/login', {
        controller: 'LoginController',
        templateUrl: '/Static/Views/login.html',
    });

    $routeProvider.when('/register', {
        controller: 'SignupController',
        templateUrl: '/Static/Views/signup.html'
    });

    $routeProvider.when('/form', {
        controller: 'coffeeController',
        templateUrl: '/Static/Views/form.html'
    });
    $routeProvider.when('/table', {
        controller: 'coffeeController',
        templateUrl: '/Static/Views/table.html'
    })

    $routeProvider.otherwise({ redirectTo: '/home' });
})

    app.config(function ($httpProvider) {
        //$httpProvider.interceptors.push('authInterceptorService');
    });

    $(function () {
        $("anim").change(function () {
            $("datepicker").datepicker("options", "showAnim", $(this).val());
        });
    });
