define(function(require) {

    function ImagesCtrl($scope, $compile, moduleService){

        $scope.add = function(){
            $(moduleService.currentElem).css("background-image", "url('"+this.externalFile+"')");
            $(moduleService.currentElem).css("background-size", "cover");
            $(moduleService.currentElem).css("background-position", "center");
        }

    };

    return ImagesCtrl;

});
