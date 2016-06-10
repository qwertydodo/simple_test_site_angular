// Karma configuration
// Generated on Thu Jun 09 2016 15:03:40 GMT+0300 (Belarus Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
	  './build/vendor/angular/angular.js',
	  './build/vendor/angular-ui-router/release/angular-ui-router.min.js',
	  './node_modules/angular-mocks/angular-mocks.js',
	  './build/**/*.html',
	  './build/js/**/*.js',
	  './test/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
		'./build/**/*.html': ['ng-html2js'],
		'./build/**/!(*.mock|*.spec).js': ['coverage']
    },
	
	ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: './build/',
      // create a single module that contains templates from all the files
      moduleName: 'templates'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

	 htmlReporter: {
      outputFile: './test/TestResult.html',
			
      // Optional 
      pageTitle: 'Unit Tests'
    },
	
	coverageReporter: {
      type : 'html',
      // output coverage reports
      dir : './test/'
    },
	
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
