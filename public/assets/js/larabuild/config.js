require.config({
  map:{
    // Maps
  },
  paths:{
    // Aliases and paths of modules
      'angular': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min'
  },
  shim:{
    angular: {
            exports: 'angular'
        }
  }
});

require(['editor'],
  function(editor, modules) {

    console.log(editor);
    angular.bootstrap(document, ['CMS_Editor']);

  }
);
