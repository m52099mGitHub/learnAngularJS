/**
 * Created by MM on 2016/10/13.
 */

var app=angular.module('cartApp',[]);
app.controller('myCtrl',function($scope){
    //定义数据
    $scope.items=[
        {
            id:1,
            name:'iphone7',
            count:3,
            price:6588,
            pic:'1.jpg'
        },
        {
            id:2,
            name:'iphone6',
            count:4,
            price:5588,
            pic:'2.jpg'
        },
        {
            id:3,
            name:'iphone5',
            count:2,
            price:4588,
            pic:'3.jpg'
        },
        {
            id:4,
            name:'iphone4',
            count:3,
            price:2588,
            pic:'4.jpg'
        }
    ];
    //购买总数量
    $scope.totalCount=function(){
        var total=0;
        angular.forEach($scope.items,function(item){
            total+=item.count;
        });
        return total;
    };
    //购买总价
    $scope.totalPrice=function(){
        var total=0;
        angular.forEach($scope.items,function(item){
            total+=item.count*item.price;
        });
        return total;
    };
    //添加数量
    $scope.add=function(id){
        var index=findIndex(id);
        ++$scope.items[index].count;
    };
    //减少数量
    $scope.reduce=function(id){
        var index=findIndex(id);
        if(index!=-1){
            var item=$scope.items[index];
            if(item.count>1){
                --item.count;
            }
            else{
                var delConfirm=confirm('您确定要删除此宝贝吗?');
                if(delConfirm){
                    $scope.remove(id);
                }
            }
        }
    };
    var findIndex=function(id){
        var index=1;
        angular.forEach($scope.items,function(item,key){
            if(item.id===id){
                index=key;
                return;
            }
        });
        return index;
    };
    //删除商品
    $scope.remove=function(id){
        var index=findIndex(id);
        $scope.items.splice(index,1);
    };
    $scope.clearCart=function(){
        $scope.items={};
    }
});