define([], function() {

    function TemplateController($scope, $compile, $http, moduleService){

        $scope.templateJson = [
            {container:"wrap-3", view:"navigation.1"}
        ]

        $http.get('getTemplates').success(function(data) {
          $scope.templateJson = data;
        });

        $scope.getURL = function(){
            //console.log(this)
            //return 'getViewByContainer/wrap-1'
        }

        $scope.loadViews = function(){
            angular.forEach($scope.templateJson, function(tmptPart, key) {
                $('#'+tmptPart.container).append($compile('<ng-include src="\'getViewByContainer/'+ tmptPart.view +'\'">peer</ng-include>')($scope))
            });
        }

        $scope.loadViews();

    }

    return TemplateController;
})
