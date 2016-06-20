module.exports = function() {
    var config = require('../support/config');
    this.World = require("./../support/world.js").World;

    this.Given(/^The "([^"]*)" page opened$/, function(page) {
        var url = config.pages[page];
        return this.browser.get(url);
    });
    
    this.When(/^I am on the opened "([^"]*)" page$/, function (page, callback) {
        callback();
    });

    this.When(/^I click the "([^"]*)" link$/, function(linkName) {
        return this.browser
            .findElement(By.partialLinkText(linkName))
            .click()
    });
 
    this.Then(/^I should see the page with the title "([^"]*)"$/, function (title) {
        return expect(this.browser.getTitle()).to.eventually.equal(title);
    });
};