<aside ng-controller="moduleController" id='module-select'>
    <section class='inner'>
        <div ng-if='moduleView'><div ng-include='moduleView'/></div></div>

        <div ng-if='!moduleView'>
            <h2>Module Select</h2>
            <ul class='modules'>
                @foreach(Module::All() as $module)
                    <li class='module' ng-click="activateModule($event, '{{$module->name}}')"><img width="48" height="48" src="{{$module->icon}}"/></li>
                @endforeach
            </ul>
        </div>
    </section>
</aside>
