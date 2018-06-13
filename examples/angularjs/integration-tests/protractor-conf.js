exports.config = {
  framework: 'cucumber',
  rootElement: 'body', // location of ng-app directive
  seleniumAddress: 'http://zalenium.todomvc-stage.svc:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },
  specs: ['features/*.feature'],

  // See cucumberOpts in https://github.com/angular/protractor/blob/master/docs/referenceConf.js
  // A list of tags to run can be specified here e.g.
  // tags: '@smoke'
  // tags: ['@smoke', '@otherTag, @thirdTag']
  // The Cucumber require path can be set with the 'require' property.
  cucumberOpts: {
    format: 'pretty'
  }
};

