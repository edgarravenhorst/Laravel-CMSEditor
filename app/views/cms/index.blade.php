<!doctype html>
<html lang="en" ng-app="cmsEdit">
<head>
	<meta charset="UTF-8">
	<title>CMS editor</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js"></script>
    <script>
    var cmsEdit = angular.module('cmsEdit', [])

    cmsEdit.config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    });

    </script>
</head>
<body>

</body>
</html>
