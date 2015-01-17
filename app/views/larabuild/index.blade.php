@extends('larabuild.layouts.editor')

@section('cmsWrapper')

<section id='cms_container' class='wrapper'>
    @include('cms.modules.split.generated.template')
</section>

@stop
