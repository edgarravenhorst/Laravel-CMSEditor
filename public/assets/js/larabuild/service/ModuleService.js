define([], function() {

    ModuleService = function($rootScope) {
        var service = {};
        service.currentModule = '';
        service.activeWindow = '';
        service.currentElem;
        return service;
    };

    return ModuleService;

});
