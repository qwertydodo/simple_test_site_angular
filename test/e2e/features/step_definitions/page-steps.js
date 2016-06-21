var config = require('../support/config'),
    utils = require('../support/utils');

module.exports = function() {
    this.World = require("./../support/world.js").World;

    this.Given(/^The "([^"]*)" page opened$/, function(page) {
        var url = config.pages[page];
        return this.browser.get(url).then(utils.delay.bind(null, config.loadPageTimeout));
    });
    
    this.When(/^I am on the opened "([^"]*)" page$/, function (page, callback) {
        callback();
    });

    this.When(/^I click the "([^"]*)" link$/, function(linkName) {
        return this.browser
            .findElement(By.partialLinkText(linkName))
            .click()
            .then(utils.delay.bind(null, config.loadPageTimeout))
    });
 
    this.Then(/^I should see the page with the title "([^"]*)"$/, function (title) {
        return expect(this.browser.getTitle()).to.eventually.equal(title);
    });
};