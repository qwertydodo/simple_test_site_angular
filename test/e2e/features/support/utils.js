var utils = {},
    browser = require('./world.js').getBrowser();

/**
 * Return selected option name
*/
utils.getSelectedOptionText = function(select) {
    return select.getAttribute('value')            
        .then(function(selectValue) {
            return select
                .findElement(By.xpath('//*[@value="' + selectValue + '"]'))
                .getText();
        });
};

module.exports = utils;