var MainController = function($scope,$http){
    var onUserComplete= function(response){
        $scope.user=response.data;

    };
    
    var onUserCompleteError = function(reason){
        $scope.error="Sorry couldn't fetch the results. ";

    };
    $http.get("https://api.github.com/users/saursh")
    .then(onUserComplete,onUserCompleteError);
};