define([],function(){
  function routes($routeProvider) {

    $routeProvider.when('/home', {templateUrl: 'templates/home.html', controller: 'ideasHomeController'})
      .when('/details/:id',{templateUrl:'templates/ideaDetails.html', controller:'ideaDetailsController'})
      .otherwise({redirectTo: '/home'});
  }

  routes.$inject=['$routeProvider'];
  return routes;
});
