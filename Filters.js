(function(){
    var app= angular.module("dataViewer",[]);
    var MainController=function($scope,$http){        
        var onhttpComplete=function (response){
            $scope.user=response.data;
            $http.get($scope.user.repos_url).then(onRepos,onError);
        };
        var onError=function(reason){
            $scope.error="Sorry couldn't fetch the data";
        };
        $scope.onSearch= function(username){
            $http.get("https://api.github.com/users/"+username).then(onhttpComplete, onError);
        };
        
        
        var onRepos=function(response){
            $scope.repos=response.data;

        };
        $scope.username= "angular";
        $scope.message= "GitHub Viewer";
        $scope.repoSortOrder= "-stargazers_count";

    };
    app.controller("MainController",MainController);

}());
