define([], function() {
    function InterfaceCtrl($scope, $compile, moduleService){

        $scope.createAddModuleButton = function(container){
            container.parent().find('.btn-add-module').remove();
            var btnhtml = '<button class="btn-add-module" ng-click="addModule($event, \'#module-select\')"></button>'
            container.filter(function(){
                return $(this).children('.wrapper').length == 0
            }).append($compile(btnhtml)($scope));


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

                $.each(wrapcontainer.children('.wrapper'), function(i,wrapper){
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
                    offsetY = e.clientY - wrapcontainer.offset().top + $(document).scrollTop();

                    if (position.right > 0){
                        wrapper1.css('right', 100-(offsetX/wrapcontainer.outerWidth())*100 + '%');
                        wrapper2.css('left', (offsetX/wrapcontainer.outerWidth())*100 + '%');
                    }
                    console.log($(document).scrollTop());
                    if (position.bottom > 0){
                        wrapper1.css('bottom', 100-(offsetY/wrapcontainer.outerHeight())*100 + '%');
                        wrapper2.css('top', ((offsetY)/wrapcontainer.outerHeight())*100 + '%');
                    }
                })

                $(document).mouseup(function(e){
                    wrapcontainer.unbind('mousemove');
                    $scope.saveLayout();
                });
            })
        };

        $scope.saveLayout = function(){
            data = {
                '_token': $('meta[name=_token]').attr('content'),
                layout:[],
                sass:'',
                html:''
            };

            $('.wrapper').each(function(i, wrapper){
                if(i!=0)$(wrapper).attr('id', 'wrap-' + i)
                    });

            sass = '#cms_container {\n';
            $('.wrapper').each(function(i, wrapper){
                var wrapStyle = $(wrapper).attr('style');

                var wrapperData = {
                    id:$(wrapper).attr('id'),
                    parent:$(wrapper).parent().attr('id')
                }
                data.layout.push(wrapperData);

                if(wrapStyle) {
                    sass += '\t#wrap-' + i + '{';
                    sass += wrapStyle;
                    sass += '}\n'
                }
            });

            sass += '}'

            data.sass = sass;

            temphtml = $('#cms_container').clone();

            data.html += temphtml.html();

            $.ajaxSetup({
                headers: {
                    'X-CSRF-Token': $('meta[name="_token"]').attr('content')
                }
            });

            $.post('writelayoutfiles/', data);

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

    return InterfaceCtrl;
});
