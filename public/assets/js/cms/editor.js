

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
        container.append($compile(btnhtml)($scope));


        $('.wrapper').find('.handle').remove();
        $.each($('.wrapper'), function(i,wrapper){
            var position = {
                top: parseInt($(wrapper).css('top'),10),
                left: parseInt($(wrapper).css('left'),10),
                right: parseInt($(wrapper).css('right'),10),
                bottom: parseInt($(wrapper).css('bottom'),10),
            }

            if (position.right > 0) {
                var handlehtml = '<button class="handle handle-right"></button>'
                $(wrapper).append(handlehtml);
            }

            if (position.bottom > 0) {
                var handlehtml = '<button class="handle handle-bottom"></button>'
                $(wrapper).append(handlehtml);
            }
        });

        $('.handle').unbind('mousedown');
        $('.handle').unbind('mouseup');
        $('.handle').mousedown(function(e){

            var wrapper1 = $(this).closest('.wrapper');
            var wrapcontainer = wrapper1.parent()
            var wrapper2 = wrapcontainer

            console.log(wrapcontainer, wrapper1, wrapper2);

            $.each(wrapcontainer.children('.wrapper'), function(i,wrapper){
                console.log(i)
                if (wrapper !== wrapper1) {
                    wrapper2 = $(wrapper);
                }
            })

            var position = {
                right: parseInt($(wrapper1).css('right'),10),
                bottom: parseInt($(wrapper1).css('bottom'),10),
            }

            wrapcontainer.mousemove(function(e){
                offsetX = e.clientX - wrapcontainer.offset().left;
                offsetY = e.clientY - wrapcontainer.offset().top;

                if (position.right > 0){
                    wrapper1.css('right', 100-(offsetX/wrapcontainer.outerWidth())*100 + '%');
                    wrapper2.css('left', (offsetX/wrapcontainer.outerWidth())*100 + '%');
                }

                if (position.bottom > 0){
                    wrapper1.css('bottom', 100-(offsetY/wrapcontainer.outerHeight())*100 + '%');
                    wrapper2.css('top', (offsetY/wrapcontainer.outerHeight())*100 + '%');
                }


            })

            $(document).mouseup(function(e){
                wrapcontainer.unbind('mousemove');
            });
        })
    };

    $scope.compileChildWrappers = function(){
        $compile($('.btn-add-module'))($scope);
    }

    $scope.createAddModuleButton($('.wrapper'));

    $scope.addModule = function($event, name) {
        $('.wrapper').removeClass('active');
        $($event.target.parentElement).addClass('active');
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
