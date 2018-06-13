// The filename doesn't matter.
/* globals browser */
'use strict';

module.exports = function beforeHooks() {

  // Take screenshots after failed scenarios.
  this.After(function (scenario, done) {
    if (scenario.isFailed()) {
      browser.driver.takeScreenshot().then(
        function(imageData) {
          var decodedImageData = new Buffer(imageData, 'base64').toString('binary');

          // No callback for the default attachment type.
          scenario.attach(decodedImageData, 'image/png');

          done();
        }
      );
    } else {
      done();
    }
  });
};
