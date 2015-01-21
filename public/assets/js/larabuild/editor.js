define(function(require){

    var moduleController = require('controller/ModuleController');
    var templateController = require('controller/TemplateController');
    var interfaceController = require('controller/InterfaceController');

    var moduleService = require('service/ModuleService');
    var templateService = require('service/TemplateService');
    var modules = require('modules');

    var editor = angular.module('CMS_Editor', [], function($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    });

    editor.factory('moduleService', moduleService);
    editor.factory('TemplateService', templateService);

    editor.controller("interfaceController", ['$scope', '$compile', 'moduleService', interfaceController] )
    editor.controller("moduleController", ['$scope', '$http', 'moduleService', moduleController] )
    editor.controller("templateController", ['$scope', '$compile', '$http', 'moduleService', templateController] )

    return editor;
});
