define(function(require) {

    function ContentCtrl($scope, $compile, moduleService){

        $scope.add = function(){

            console.log($("#html"));

        }
    };

    return ContentCtrl;

});
