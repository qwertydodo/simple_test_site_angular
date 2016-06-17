var utils = require('../support/utils'),
    config = require('../support/config'),
    elems = config.elems;

module.exports = function() {
    this.When(/^I am click on the news header$/, function() {
        return this.browser
            .findElement(By.className(elems.NEWS_HEADER_CLS))
            .click()
    });

    this.When(/^I am click on the "([^"]*)" button under the single news$/, function(buttonText) {
        return this.browser
            .findElement(By.className(elems.NEWS_ITEM_CONTAINER))
            .findElement(By.xpath('//button[contains(text(),"' + buttonText + '")]'))
            .click()
    });

    this.Then(/^I should see the news edit form$/, function() {
        return this.browser
            .findElement(By.className(elems.NEWS_ITEM_CONTAINER))
            .findElement(By.xpath('//button[contains(text(),"Submit")]'))
    });

};