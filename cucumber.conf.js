//protractor.conf.js
exports.config = {
	getPageTimeout: 60000,
	allScriptsTimeout: 50000,
	framework: 'custom',
	// path relative to the current config file
	frameworkPath: require.resolve('protractor-cucumber-framework'),
	capabilities: {
		browserName: 'chrome',
	},

	// Spec patterns are relative to this directory.
	specs: ['features/*.feature'],

	cucumberOpts: {
		require: 'features/step_definitions/my_step_definitions.js',
		tags: false,
		profile: false,
		'no-source': true,
	},
};
