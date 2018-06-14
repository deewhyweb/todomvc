exports.config = {
  framework: 'cucumber',
  rootElement: 'body', // location of ng-app directive
  seleniumAddress: 'http://zalenium.todomvc-stage.svc:4444/wd/hub',
  multiCapabilities: [{
	  'browserName': 'firefox'
	}, {
	  'browserName': 'chrome'
	}],
  specs: ['features/*.feature'],
  coloredLogs: false,
  // See cucumberOpts in https://github.com/angular/protractor/blob/master/docs/referenceConf.js
  // A list of tags to run can be specified here e.g.
  // tags: '@smoke'
  // tags: ['@smoke', '@otherTag, @thirdTag']
  // The Cucumber require path can be set with the 'require' property.
  cucumberOpts: {
    format: 'json:./tmp/results.json'
  },
  plugins: [{
      package: 'protractor-multiple-cucumber-html-reporter-plugin',
      options:{
          // read the options part
    	  automaticallyGenerateReport: true
      }
  }]
};

