// The filename doesn't matter.
'use strict';

// Require page objects.
var homePage = require('../../../page-objects/home-page');

module.exports = function beforeHooks() {

  // Tagged hook.
  // Load the page and clear localStorage.
  // Can't do this in an after hook in-case
  // a scenario fails part way through.
  this.Before('@home', function (done) {
    var world = this;

    // Load the homepage.
    homePage.get();

    // Clear localStorage.
    world.clearLocalStorage();

    // Reload the page with empty localStorage.
    homePage.get();

    done();
  });
};
