define
(
    function(require){

        function Module(){

            this.name = 'ImagesModule'

            this.register = function(){
                var editor = require('editor')
                var imagesController = require('module/images/imagesController')
                editor.controller( "imagesController", ['$scope', '$compile', 'moduleService', imagesController])
            }
        }

        return new Module();
    }
);
