define(function(require) {

    function ModuleSplitCtrl($scope, $compile, moduleService){
    $scope.test='tet'
    $scope.split = function(direction){
        $(moduleService.currentElem).append('<span class="splitLine '+ direction +'"></span>');
        $('#module-select').removeClass('visible');

        var offsetX = 0;
        var offsetY = 0;

        var position = {
            top: parseInt($(moduleService.currentElem).css('top'),10),
            left: parseInt($(moduleService.currentElem).css('left'),10),
            right: parseInt($(moduleService.currentElem).css('right'),10),
            bottom: parseInt($(moduleService.currentElem).css('bottom'),10),
        }

        $(moduleService.currentElem).mousemove(function(e) {
            offsetX = e.offsetX;
            offsetY = e.offsetY;

            if (offsetX < 0) offsetX = 0;
            if (offsetY < 0) offsetY = 0;

            if(direction == 'horizontal')
                $('.splitLine').css('top', e.offsetY);

            if(direction == 'vertical')
                $('.splitLine').css('left', e.offsetX);
        })

        $(moduleService.currentElem).click(function(e) {
            $(moduleService.currentElem).unbind('mousemove');

            var el1_left = el1_top = el1_right = el1_bottom = el2_left = el2_top = el2_right = el2_bottom = 0;
            var width = height = 'auto'

            if(direction == 'horizontal') {
                el1_bottom = (($(moduleService.currentElem).outerHeight() - offsetY)/$(moduleService.currentElem).outerHeight())*100;
                el2_top = (offsetY/$(moduleService.currentElem).outerHeight())*100;
            }

            if(direction == 'vertical') {
                el1_right = (($(moduleService.currentElem).outerWidth() - offsetX)/$(moduleService.currentElem).outerWidth())*100;
                el2_left = (offsetX/$(moduleService.currentElem).outerWidth())*100;
            }

            var html1 = '<section ng-include="getURL()" class="wrapper" style="position:absolute; left:' + el1_left + '%; right:'+ el1_right +'%; top:'+ el1_top +'%; bottom:'+ el1_bottom +'%;"></section>'
            var html2 = '<section class="wrapper" style="position:absolute; left:' + el2_left + '%; right:'+ el2_right +'%; top:'+ el2_top +'%; bottom:'+ el2_bottom +'%;"></section>'

            $(moduleService.currentElem).append(html1);
            $(moduleService.currentElem).append(html2);

            $(moduleService.currentElem).removeClass('active');
            $('.splitLine').remove();

            $scope.$parent.createAddModuleButton($(moduleService.currentElem).find('.wrapper'));
            $(moduleService.currentElem).unbind('click');

            $scope.$parent.saveLayout();

        })
    }
};

    return ModuleSplitCtrl;

});
