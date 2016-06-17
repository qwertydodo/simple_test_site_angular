var utils = require('../support/utils'),
    config = require('../support/config'),
    elems = config.elems;

module.exports = function() {
    this.When(/^I change the select filter on news page/, function () {
        var selectCls = elems.DM_PREFIX + 'filter',
            optionCss = '.' + selectCls + '>option:nth-child(2)';

        return this.browser
            .findElement(By.className(elems.DM_CONTAINER_CLS))
            .findElement(By.css(optionCss))
            .click();
    });
 
    this.When(/^I change the select order on "([^"]*)" news page$/, function (optionText) {
        var selectCls = elems.DM_PREFIX + 'order',
            optionXpath = '//option[contains(text(),"' + optionText + '")]';

        return this.browser
            .findElement(By.className(selectCls))
            .findElement(By.xpath(optionXpath))
            .click()
    });


    this.Then(/^I should see the news only with selected category$/, function () {
        var selectCls = elems.DM_PREFIX + 'filter';

        /**
         *Get all news categories on page and return array of uniq categories
         */
        var categoriesPromise = this.browser
                .findElement(By.className(elems.NEWS_LIST_CONTAINER_CLS))
                .findElements(By.className(elems.NEWS_CATEGORY_CLS))
                .then(function(categories) {
                    var promises = [];
                    promises = categories.map(function(category) {
                        return category.getText();
                    });

                    return Promise.all(promises);
                })
                .then(function(categoryNames) {
                    var uniqCatergory = categoryNames.filter(function(item, pos, self) {
                        return self.indexOf(item) === pos;
                    });

                    return uniqCatergory; 
                });
        
        /**
         *Get select text value
         */     
        var selectValuePromise = this.browser
                .findElement(By.className(selectCls))
                .then(utils.getSelectedOptionText);


        return Promise.all([categoriesPromise, selectValuePromise]) 
            .then(function(values) {
                var categories = values[0],
                    selectVal = values[1];

                expect(categories.length).to.equal(1);                                  //Had to be the only one category
                expect(categories[0].toLowerCase()).to.equal(selectVal.toLowerCase());  //The category name had to be equal the select value   
            });
    });



    this.Then(/^I should see the ordered news by "([^"]*)" date$/, function (sortType) {
        return this.browser
            .findElement(By.className(elems.NEWS_LIST_CONTAINER_CLS))
            .findElements(By.className(elems.NEWS_DATE_CLS))
            .then(function(dateSpans) {
                var datesCompare = [ dateSpans[0], dateSpans[dateSpans.length-1] ], //Get only the firs and last date and check difference
                    promises;

                promises = datesCompare.map(function(date) {
                    return date.getText();
                });

                return Promise.all(promises);
            })
            .then(function(datesText) {
                var dates = datesText.map(function(date) {
                    return new Date(date);
                });
                    
                switch(sortType) {
                    case 'ascending':
                        assert.operator(dates[0] - dates[1], '<', 0);
                        break;
                    case 'descending':
                        assert.operator(dates[0] - dates[1], '>', 0);
                        break;
                }
            });
    });

};