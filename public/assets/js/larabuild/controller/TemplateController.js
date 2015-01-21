define([], function() {

    function TemplateController($scope, $compile, $http, moduleService){

        $scope.templateJson = [
            {container:"wrap-3", view:"navigation.1"}
        ]

        $http.get('getTemplates').success(function(data) {
            console.log(data);
            $scope.templateJson = data;
            $scope.loadViews();
        });

        $scope.loadViews = function(){
            angular.forEach($scope.templateJson, function(tmptPart, key) {
                $('#'+tmptPart.container).prepend($compile('<ng-include src="\'getTemplateView/'+ tmptPart.view +'\'">peer</ng-include>')($scope))
            });
        }

    }

    return TemplateController;
})
