<!doctype html>

<html lang="en">
    <head>

        <meta charset="utf-8">

        <title>Edit CMS</title>
        <meta name="description" content="Edit CMS Layout">
        <meta name="author" content="">

        <meta name="_token" content="{{ csrf_token() }}"/>

        <link rel="stylesheet" href="{{ URL::asset('assets/css/editor.css') }}">



        <!--[if lt IE 9]>
            <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
    </head>
    <body  ng-controller="interfaceController" id='CMS_Editor'>

        @yield('cmsWrapper')

        <section id='cms-editor-interface'>
            @include('cms.layout.interface.module-select')
        </section>

        <script data-main="{{ URL::asset('assets/js/larabuild/config') }}" src={{ URL::asset('assets/js/require.min.js') }}></script>
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js"></script>
    </body>

</html>
