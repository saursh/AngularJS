(function(){
    var app=angular.module("myModule",[]); //angular is the only global variable in angular. This is adding module to that global variable. Hence it is accessible outside of IIFE as well.

        var MainController= function($scope,$http){
            var onHttpComplete = function(response){
                $scope.user=response.data;
            };
            var  onHttpFailure= function(reason){
                $scope.error="Couldn't fetch the data";
            };
            $http.get("https://api.github.com/users/saursh").then(onHttpComplete, onHttpFailure);
    };
    app.controller("MainController", MainController);
}());