define([], function() {

    function TemplateController($scope, $compile, $http, moduleService){
        $scope.templateJson = [
            {container:"wrap-4", view:"navigation"}
        ]

        $scope.getURL = function(){
            console.log(this)
            return 'getviewByContainer/wrap-1'
        }

        $scope.loadViews = function(){
            angular.forEach($scope.templateJson, function(tmptPart, key) {
                //$('#'+tmptPart.container).attr('ng-include', 'getView/'+tmptPart.view)
            });
        }

        $scope.loadViews();

    }

    return TemplateController;
})
