<?php

View::addLocation(app_path().'/modules/layout/views');

class Mod_SplitController extends BaseController {


    public function writeLayoutFiles($ftype='sass'){

        $style = Input::get('sass');
        $htmlTemplate = Input::get('html');

        $bytes_written = File::put(public_path() . '/assets/sass/modules/layout/_layouts.scss', $style);
        if ($bytes_written === false)
        {
            die("Error writing to file");
        }

        $bytes_written = File::put(app_path() . '/views/larabuild/template.blade.php', $htmlTemplate);
        if ($bytes_written === false)
        {
            die("Error writing to file");
        }
    }

}
