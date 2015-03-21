var app = angular.module('buzzHub', ['ngRoute', 'ngResource', 'angularFileUpload', 'LocalStorageModule', 'angular-loading-bar']);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/Static/Views/home.html"
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "/Static/Views/login.html"
    });

    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "/Static/Views/signup.html"
    });

    $routeProvider.when("/form", {
        controller: "coffeeController",
        templateUrl: "/Static/Views/form.html",
        controllerAs: "coffee"
    });
    $routeProvider.when("/table", {
        controller: "coffeeController",
        templateUrl: "/Static/Views/table.html",
        controllerAs: "coffee"
    })

    $routeProvider.otherwise({ redirectTo: "/home" });
})

    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    });

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);