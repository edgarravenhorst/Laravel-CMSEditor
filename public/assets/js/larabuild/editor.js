define(function(require){

    var moduleController = require('controller/moduleController');
    var interfaceController = require('controller/InterfaceController');
    var moduleService = require('service/ModuleService');
    var modules = require('modules');

    var editor = angular.module('CMS_Editor', [], function($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    });

    editor.factory('moduleService', moduleService);
    editor.controller("interfaceController", ['$scope', '$compile', 'moduleService', interfaceController] )
    editor.controller("moduleController", ['$scope', '$http', 'moduleService', moduleController] )

    var splitController = require('module/layout/SplitController')
    editor.controller( "moduleSplitController", ['$scope', '$compile', 'moduleService', splitController] )

     var navigationController = require('module/navigation/NavigationController')
    editor.controller( "navigationController", ['$scope', '$compile', 'moduleService', navigationController] )

    return editor
});
