var bookstoreFilters=angular.module("bookstoreFilters",[]);
bookstoreFilters
    .filter("checkStatusFilter",function(){
        return function(input){
            return input=="true"?"正常出售":"暂无库存";
        };
    })
    .filter("getStatusFilter",function(){
        return function(input){
            return input=="true"?"label-success":"label-danger";
        };
    });
