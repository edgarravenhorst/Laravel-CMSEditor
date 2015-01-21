define([], function() {

    function TemplateController($scope, $http, moduleService){
        alert('huh')
        $scope.templateJson =
            {
            partial: {container:"wrap-1", view:"navigation"}
        }



        $scope.loadViews = function(){
            alert('huh')
            console.log($scope.templateJson);
            angular.forEach($scope.templateJson, function(value, key) {
                console.log(value, key);
            });

        }

        $scope.loadViews();

    }

    return TemplateController;
})
