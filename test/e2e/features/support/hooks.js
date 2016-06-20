var browser = require('./world.js').getBrowser(),
    fs = require('fs'),
    path = require('path'),
    sanitize = require("sanitize-filename");

var myHooks = function () {
  
    this.After(function(scenario) {
      /*if(scenario.isFailed()) {
            this.browser.takeScreenshot().then(function(data) {
                var base64Data = data.replace(/^data:image\/png;base64,/,"");
                fs.writeFile(path.join('screenshots', sanitize(scenario.getName() + ".png").replace(/ /g,"_")), base64Data, 'base64', function(err) {
                    if(err) { 
                        console.log(err);
                    }
                });
            });
        }*/
        return this.browser.manage().deleteAllCookies();
    });

    this.registerHandler('AfterFeatures', function (event) {
        return browser.quit();
    });
};

module.exports = myHooks;
