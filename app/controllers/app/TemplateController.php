<?php

class TemplateController extends BaseController {

	 public function getView($container){

         $template = Templates::where('container','=',$container);
        return View::make('template.partials.'.$template->first()->view);

     }

    public function getAll(){

    return json_encode(Templates::all());

    }

}
