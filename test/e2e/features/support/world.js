var fs = require('fs'),
    Webdriver = require('selenium-webdriver'),
    browser,
    platform = "CHROME",
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

/*global vars*/
global.expect = chai.expect;
global.assert = chai.assert;
global.By = Webdriver.By;

var buildChromeDriver = function() {
    return new Webdriver.Builder().
        withCapabilities(Webdriver.Capabilities.chrome()).
        build();
};

var buildFirefoxDriver = function() {
    return new Webdriver.Builder().
        withCapabilities(Webdriver.Capabilities.firefox()).
        build();
};

var getBrowser = function() {
    return browser;
};

switch(platform) {
    case 'FIREFOX':
        browser = buildFirefoxDriver();
        break;
    default:
        browser = buildChromeDriver();
}

var World = function () {
    this.Webdriver = Webdriver;
    this.browser = browser;   
};

module.exports.World = World;
module.exports.getBrowser = getBrowser;