var bookstoreRoutes=angular.module("bookstoreRoutes",["ngRoute"]);

bookstoreRoutes.config(function($routeProvider){
    $routeProvider
        .when("/",{
            templateUrl:"listforindex13.html",
            controller:"bookstoreListController"
        })
        .when("/:id",{
            templateUrl:"datailforindex13.html",
            controller:"bookstoreListDetailController"
        })
        .otherwise({
            redirectTo:"/"
        });
});
