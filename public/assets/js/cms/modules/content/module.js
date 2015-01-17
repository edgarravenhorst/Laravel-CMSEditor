function ContentCtrl($scope, $compile, moduleService){

    $scope.add = function(){

        //alert($($scope.content).html());
        console.log($("#html"));

    }
 };

CMS_Editor.controller( "contentController", ['$scope', '$compile', 'moduleService', ContentCtrl] )
