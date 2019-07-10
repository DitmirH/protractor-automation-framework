const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
	framework: 'jasmine',
	specs: ['test/*.js'],
	capabilities: {
		browserName: 'chrome',
		chromeOptions: {
			args: ['incognito'],
		},
	},

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
