
ModuleService = function($rootScope) {
    var service = {};
    service.currentModule = '';
    service.activeWindow = '';
    service.currentElem;
    return service;
};

function ModuleCtrl($scope, $http, moduleService){
    $scope.moduleView = false;
    $scope.activateModule = function($event, name) {
        $scope.activeModule = name;
        $scope.moduleView = 'getView/' + name;
    };

    $scope.deActivateModule = function($event, name) {
        $scope.activeModule = false;
        $scope.moduleView = false;
    }
};

function InterfaceCtrl($scope, $compile, moduleService){

    $scope.createAddModuleButton = function(container){
        container.parent('.wrapper').find('.btn-add-module').remove();
        var btnhtml = '<button class="btn-add-module" ng-click="addModule($event, \'#module-select\')"></button>'
        var temp = $compile(btnhtml)($scope);
        container.append(temp);
    }

    $scope.compileChildWrappers = function(){
        $compile($('.btn-add-module'))($scope);
    }

    $scope.createAddModuleButton($('.wrapper'));

    $scope.addModule = function($event, name) {
        moduleService.currentElem = $event.target.parentElement;
        $scope.activeWindow = name;
        $('.module').removeClass('visible');
        $(name).addClass('visible');
    }
};

var CMS_Editor = angular.module('CMS_Editor', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

CMS_Editor.factory('moduleService', ModuleService);
CMS_Editor.controller( "interfaceController", ['$scope', '$compile', 'moduleService', InterfaceCtrl] )
CMS_Editor.controller( "moduleController", ['$scope', '$http', 'moduleService', ModuleCtrl] )
