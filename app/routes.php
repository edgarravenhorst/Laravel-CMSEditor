<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('cms.index');
});


Route::get('/getView/{name}', function($name)
{
    return View::make('cms.modules.' . $name . '.editor.settings');
});

Route::group(['before' => 'csrf'], function() {
    Route::post('/writelayoutfiles/', array('as' => 'writelayoutfiles', 'uses' => 'Mod_SplitController@writeLayoutFiles'));
});


// Route::get('category/{name}','CategoryController@show');
