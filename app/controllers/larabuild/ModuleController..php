<?php

View::addLocation(app_path().'/modules');

class ModuleController extends BaseController {

    public function getView($name){

         return View::make($name . '.views.settings');
     }


}
