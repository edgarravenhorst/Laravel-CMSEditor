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

Route::get('/voorbeeld', array('as' => 'voorbeeld', 'uses' => 'VoorbeeldController@index'));

Route::get('/', function()
{
	return View::make('larabuild.index');
});


Route::get('/getView/{name}', function($name)
{
    return View::make('larabuild.modules.' . $name . '.editor.settings');
});

Route::group(['before' => 'csrf'], function() {
    Route::post('/writelayoutfiles/', array('as' => 'writelayoutfiles', 'uses' => 'Mod_SplitController@writeLayoutFiles'));
});

Route::get('/getTemplateView/{container}',  array('as' => 'getViewByContainer', 'uses' => 'TemplateController@getView'));

Route::get('/getTemplates/',  array('as' => 'getTemplates', 'uses' => 'TemplateController@getAll'));
