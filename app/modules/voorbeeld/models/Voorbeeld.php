<?php

class Voorbeeld extends Eloquent {
	protected $fillable = [];


	public static function test()
	{
		return 'return model value';
	}
}