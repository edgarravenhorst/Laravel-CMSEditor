define(function(require) {

   function NavigationCtrl($scope, $compile, moduleService){

    $scope.items = [];

    $scope.add = function(orientation){
        // filter
        if(this.orientation && this.items.length > 0){

            var nav =   "<ul class='"+orientation+"'>";
            angular.forEach($scope.items, function(value, key) {
              nav += "<li><a href='"+value.action+"'>" + value.name + "</a></li>";
            });
            nav += "</ul>";

            $(moduleService.currentElem).append(nav);

            // reset
            this.items = []; $('#orientation').prop('checked', false);

        }
        else{ alert('horizontal or vertical? also add items pls.'); }

    }

    $scope.addNavItem = function(){
        // filter
        if(this.name && this.action){
            this.items.push({name: this.name, action: this.action});
            this.name = "";  this.action = "";
        }
        else{ alert('fill in a name and a action pls');}
    }

    $scope.removeNavItem = function(index){
        this.items.splice(index,1);
    }

 };

//CMS_Editor.controller( "navigationController", ['$scope', '$compile', 'moduleService', NavigationCtrl] )


    return NavigationCtrl;

});
