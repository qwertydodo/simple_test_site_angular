var utils = require('../support/utils'),
    config = require('../support/config'),
    singleNews = require('../mock/singleNews'),
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

    this.When(/^I am fill the news form fields with the correct data$/, function() {
        return utils.fillForm(By.className(elems.NEWS_ITEM_CONTAINER), singleNews);
    });
    
    this.Then(/^I should see the news edit form$/, function() {
        return this.browser
            .findElement(By.className(elems.NEWS_ITEM_CONTAINER))
            .findElement(By.xpath('//button[contains(text(),"Submit")]'))
    });

    this.Then(/^the news data changed$/, function () {
        return this.browser
            .findElement(By.className(elems.NEWS_ITEM_CONTAINER))
            .findElements(By.className(elems.NEWS_ITEM_FIELD))
            .then(utils.getTextFieldsValue)
            .then(function(fieldsData) {
                for (var fieldName in fieldsData) {
                    expect( fieldsData[fieldName].toLowerCase() ).to.equal( singleNews[fieldName].val.toLowerCase() );
                }
            });
    });
};