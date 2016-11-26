var bookstoreControllers=angular.module("bookstoreControllers",[]);
bookstoreControllers.controller("bookstoreListController",function($scope,bookstoreService){
    $scope.books=bookstoreService.get({id:"books"});
    $scope.orderByProp="title";
});
bookstoreControllers.controller("bookstoreListDetailController",function($scope,$routeParams,bookstoreService){
    $scope.book=bookstoreService.get({id:$routeParams.id});
    $scope.cover=$routeParams.id;
    $scope.setCover=function(id){
        $scope.cover=id;
    }
});
