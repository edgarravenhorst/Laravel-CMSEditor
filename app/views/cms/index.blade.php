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
    <div>
      <label>Name:</label>
      <input type="text" ng-model="yourName" placeholder="Enter a name here">
      <hr>
      <h1>[[Hello yourName]]!</h1>
    </div>
</body>
</html>
