'use strict';
/* global browser */ 

module.exports = {
  url: '',
  get: get,
  getPageTitle: getPageTitle,
  clearLocalStorage: clearLocalStorage,
  goToHomePage: goToHomePage
};


/**
 * Navigate to the home page.
 * @return {undefined}
 */
function get() {
  /*jshint validthis:true */
  var url = this.url;
  if (!url) {
    throw new TypeError('A page object must have a URL defined in order to call \'get\'');
  }
  browser.get(url);
}



/**
 * Clear Local Storage
 * @return {string} page title.
 */
function clearLocalStorage() {
  
  browser.executeScript('window.localStorage.clear();');
  //browser.get('javascript://localStorage.clear();')

  
}



/**
 * Navigate to home.
 * @return {string} page title.
 */
function goToHomePage() {
  
  browser.get("http://localhost:8080/#!/");

  
  //browser.get('javascript://localStorage.clear();')

  
}

/**
 * Get the page title.
 * @return {string} page title.
 */
function getPageTitle() {
  return browser.getTitle();
  
}