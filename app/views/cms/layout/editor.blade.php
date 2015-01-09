<!doctype html>

<html lang="en">
    <head>

        <meta charset="utf-8">

        <title>Edit CMS</title>
        <meta name="description" content="Edit CMS Layout">
        <meta name="author" content="">

        <link rel="stylesheet" href="{{ URL::asset('assets/css/editor.css') }}">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js"></script>
        <!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

    </head>
    <body ng-app='CMS_Editor' ng-controller="interfaceController" id='CMS_Editor'>

        @yield('cmsWrapper')

        <section id='cms-editor-interface'>
            @include('cms.layout.interface.module-select')
        </section>

        <script src="{{ URL::asset('assets/js/global.js') }}"></script>
        <script src="{{ URL::asset('assets/js/cms/cms.js') }}"></script>
        <script src="{{ URL::asset('assets/js/cms/editor.js') }}"></script>

        @foreach(Module::All() as $module)
        <script src="{{ URL::asset('assets/js/cms/modules/' . $module->name . '/module.js') }}"></script>
        @endforeach
    </body>

</html>
