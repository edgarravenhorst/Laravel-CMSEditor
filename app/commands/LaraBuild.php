<?php

use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;

class LaraBuild extends Command {

	/**
	 * The console command name.
	 *
	 * @var string
	 */
	protected $name = 'LaraBuild:make';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Make a module';

	/**
	 * Create a new command instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		parent::__construct();
	}

	/**
	 * Execute the console command.
	 *
	 * @return mixed
	 */
	public function fire()
	{
		$name = $this->argument('name');

		$this->error('Something went wrong!');


		$path = app_path().'/modules/' . $name . '/controllers/';
		$path = app_path().'/modules/' . $name . '/views/';
		$path = app_path().'/modules/' . $name . '/models/';

		File::makeDirectory($path, $mode = 0777, true, true);

		$this->line('Module created!');
	}

	/**
	 * Get the console command arguments.
	 *
	 * @return array
	 */
	protected function getArguments()
	{
		return array(
			array('name', InputArgument::REQUIRED, 'Name of the new user'),
		);
	}

	/**
	 * Get the console command options.
	 *
	 * @return array
	 */
	protected function getOptions()
	{
		return array(
			array('example', null, InputOption::VALUE_OPTIONAL, 'An example option.', null),
		);
	}

}
