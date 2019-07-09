const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
	framework: 'jasmine',
	specs: ['test/*.js'],

	onPrepare: function() {
		jasmine.getEnv().addReporter(
			new SpecReporter({
				spec: {
					displayStacktrace: true,
					displayDuration: true,
				},
			}),
		);
	},
};
