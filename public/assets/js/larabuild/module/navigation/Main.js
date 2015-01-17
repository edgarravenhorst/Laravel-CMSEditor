define
(
    function(require){

        function Module(){

            this.name = 'ImagesModule'

            this.register = function(){
                var editor = require('editor')
                var navigationController = require('module/navigation/NavigationController')
                editor.controller( "navigationController", ['$scope', '$compile', 'moduleService', navigationController] )
            }
        }

        return new Module();
    }
);
