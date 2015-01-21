define([], function() {

    function ModuleCtrl($scope, $http, moduleService){
        $scope.moduleView = false;
        $scope.activateModule = function($event, name) {
            $scope.activeModule = name;
            $scope.moduleView = 'getModuleView/' + name;
        };

        $scope.deActivateModule = function($event, name) {
            $scope.activeModule = false;
            $scope.moduleView = false;
        }
    }

    return ModuleCtrl;
})
