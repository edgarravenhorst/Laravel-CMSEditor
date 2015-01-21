<?php

class ElementController extends BaseController {

	 public function getView($container){

         $template = Templates::where('view','=',$container);
        return View::make('template.partials.'.$template->first()->view);

     }

    public function getAll(){

    return json_encode(Templates::all());

    }

}
