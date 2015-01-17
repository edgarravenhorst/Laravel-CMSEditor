define(function(require) {

   function ImagesCtrl($scope, $compile, moduleService){

    $scope.add = function(){
        $(moduleService.currentElem).css("background-image", "url('"+this.externalFile+"')");
        $(moduleService.currentElem).css("background-size", "cover");
        $(moduleService.currentElem).css("background-position", "center");
    }

 };

//CMS_Editor.controller( "imagesController", ['$scope', '$compile', 'moduleService', ImagesCtrl] )


 };

//CMS_Editor.controller( "navigationController", ['$scope', '$compile', 'moduleService', NavigationCtrl] )


    return ImagesCtrl;

});
