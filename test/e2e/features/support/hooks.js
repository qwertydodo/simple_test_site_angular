var browser = require('./world').getBrowser(),
    utils = require('./utils');

var myHooks = function () {

    this.After(function(scenario) {
        return utils.delay();
    });

    this.registerHandler('AfterFeatures', function (event) {
        return browser.quit();
    });
};

module.exports = myHooks;
