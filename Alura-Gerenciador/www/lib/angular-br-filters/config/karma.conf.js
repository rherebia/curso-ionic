module.exports = function(config) {
	var configuration = {
		basePath: __dirname + '/..',
		frameworks: ['browserify', 'jasmine'],
		files: [
			'node_modules/angular/angular.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'src/**/*.test.js',
		],
		port: 9876,
		reporters: ['progress', 'coverage'],
		preprocessors: {
			'src/**/*.test.js': [ 'browserify' ],
			'src/**/!(*spec|*test).js': ['coverage']
		},
		browserify: {
			debug: true,
			transform: [require('browserify-istanbul')({
				ignore: '**/*.test.js'
			})]
		},
		coverageReporter: {
			dir: 'coverage',
			reporters: [{
				type: 'lcov',
				subdir: 'report-lcov'
			}, {
				type: 'html',
				subdir: 'report-html'
			}, {
				type: 'text',
			}, {
				type: 'text-summary',
			}]
		},
		colors: true,
		autoWatch: false,
		singleRun: true,
		browsers: ['Chrome'],
		customLaunchers: {
			Chrome_travis_ci: {
				base: 'Chrome',
				flags: ['--no-sandbox']
			}
		},
	};

	if(process.env.TRAVIS){
		configuration.browsers = ['Chrome_travis_ci'];

		configuration.reporters.push('coveralls');
	}

	config.set(configuration);
};
