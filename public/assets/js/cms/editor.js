$('.wrapper').append('<button class="btn-add-module" ng-click="show(\'#module-select\')"></button>');


function ModuleCtrl($scope, $http){
    $scope.ActivateModule = function(name) {

        $http.get('getView/' + name).
        success(function(data, status, headers, config) {
            $('#module-select').html(data);
        }).
        error(function(data, status, headers, config) {
            console.log(data);
        });

    };
};


function InterfaceCtrl($scope){
    $scope.show = function(name) {

        $(name).addClass('visible');

    };
};

var CMS_Editor = angular.module('CMS_Editor', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

CMS_Editor.controller( "interfaceController", InterfaceCtrl )
CMS_Editor.controller( "moduleController", ['$scope', '$http', ModuleCtrl] )
