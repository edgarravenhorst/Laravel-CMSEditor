<aside ng-controller="moduleController" id='module-select' >

    <section class='inner'>
        <h2>Module Select</h2>
        <ul class='modules'>
            @foreach(Module::All() as $module)
                 <li class='module' ng-click="ActivateModule('{{$module->name}}')"><img width="48" height="48" src="{{$module->icon}}"/></li>
            @endforeach
        </ul>
    </section>

</aside>
