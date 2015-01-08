$('.wrapper').append('<button class="btn-add-module" ng-click="selectModule()"></button>');


function ModuleCtrl($scope){
    $scope.ActivateModule = function(name) {

        alert(name)

    };
};


function InterfaceCtrl($scope){
    $scope.selectModule = function() {



    };
};

var CMS_Editor = angular.module('CMS_Editor', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

CMS_Editor.controller("interfaceController", InterfaceCtrl)
CMS_Editor.controller("moduleController", ModuleCtrl)

