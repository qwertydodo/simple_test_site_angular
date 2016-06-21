var utils = require('../support/utils'),
    config = require('../support/config'),
    singleNews = require('../mock/singleNews'),
    elems = config.elems;

module.exports = function() {
    this.When(/^I click on the news header$/, function() {
        return this.browser
            .findElement(By.className(elems.NEWS_HEADER_CLS))
            .click()
    });

    this.When(/^I click on the "([^"]*)" button under the single news$/, function(buttonText) {
        return this.browser
            .findElement(By.className(elems.NEWS_ITEM_CONTAINER))
            .findElement(By.xpath('//button[contains(text(),"' + buttonText + '")]'))
            .click()
            .then(utils.delay.bind(null, config.loadPageTimeout))
    });

    this.When(/^I fill the single news form fields with the correct data$/, function() {
        return utils.fillForm(By.className(elems.NEWS_ITEM_CONTAINER), singleNews);
    });

    this.When(/^I delete data from "([^"]*)"$/, function(fieldName) {
        return this.browser
            .findElement(By.className(elems.NEWS_ITEM_CONTAINER))
            .findElement(By.name(fieldName))
            .clear();
    });

    this.When(/^I change data in select "([^"]*)" to "([^"]*)"$/, function(fieldName, optionText) {
        var optionXpath = '//option[contains(text(),"' + optionText + '")]';
        return this.browser
            .findElement(By.className(elems.NEWS_ITEM_CONTAINER))
            .findElement(By.name(fieldName))
            .findElement(By.xpath(optionXpath))
            .click();
    });
        
    this.Then(/^I should see the news edit form$/, function() {
        return this.browser
            .findElement(By.className(elems.NEWS_ITEM_CONTAINER))
            .findElement(By.xpath('//button[contains(text(),"Submit")]'))
    });

    this.Then(/^The single news data was changed$/, function() {
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

   this.Then(/^The error message under the "([^"]*)" should be displayed$/, function(fieldName) {
        return this.browser
            .findElement(By.className(elems.NEWS_ITEM_CONTAINER))
            .findElement(By.name(fieldName))
            .findElement(By.xpath('following-sibling::span[@class="help-block" and not(contains(@class, "ng-hide"))]'))
   });

   this.Then(/^The single news submit button should be disabled$/, function() {
        return this.browser
            .findElement(By.className(elems.NEWS_ITEM_CONTAINER))
            .findElement(By.xpath('//button[contains(text(),"Submit")]'))
            .getAttribute('disabled')
            .then(function(isDisabled) {
                expect(isDisabled).to.equal('true');
            });
    });
};