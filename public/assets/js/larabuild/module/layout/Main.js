define
(
    ['require', 'module/layout/SplitController'],function(require){

        function Module(){

            this.name = 'ImagesModule'

            this.register = function(){
                var editor = require('editor')
                var splitController = require('module/layout/SplitController')
                editor.controller( "moduleSplitController", ['$scope', '$compile', 'moduleService', splitController] )
            }
        }

        return new Module();
    }
);
