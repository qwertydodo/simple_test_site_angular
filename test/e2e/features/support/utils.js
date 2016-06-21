var utils = {},
    config = require('./config'),
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
/**
 * Fill form in container with data 
*/
utils.fillForm = function(formBy, data) {
    var promisesFillForm = [],
        promiseFillField,
        field,
        promiseContainer = browser.findElement(formBy);

    for (var fieldName in data) {
        field = data[fieldName];
        promiseFillField = promiseContainer
            .findElement(By.name(fieldName))

        if (field.type === 'input' || field.type === 'textarea') {
            (function(field) {
                promiseFillField
                    .then(function(elem) {
                        elem.clear();
                        elem.sendKeys(field.val);
                    });
            }(field));

        } else if (field.type === 'select') {
             (function(field) {
                var optionXpath = '//option[contains(text(),"' + field.val + '")]';
                promiseFillField
                    .findElement(By.xpath(optionXpath))
                    .click()
            }(field));
        }

        promisesFillForm.push(promiseFillField);
    }

    return Promise.all(promisesFillForm);
};


/**
 * Get the value of the text field
 * @return {fieldName: value}
*/

utils.getTextFieldValue = function(field) {
    return Promise.all([
            field.getAttribute('data-field-name'),
            field.getText()
        ]).then(function(values) {
            var fieldData = {},
                name = values[0],
                val = values[1];

            fieldData[name] = val;  

            return fieldData;
        });
};

/**
 * Get the value of the text from array of fields and transfom to single object
 * @return {
 *           fieldName1: value, 
 *           ...
 *         }
*/
utils.getTextFieldsValue = function(fieldsWebEl) {
    var promises = [],
        result = {};
        promises = fieldsWebEl.map(function(fieldWebEl) {
            return utils.getTextFieldValue(fieldWebEl);
        });

    return Promise.all(promises).then(function(fieldsData) {
        fieldsData.forEach(function(fieldData) {
            Object.assign(result, fieldData);
        });

        return result;
    });
};

utils.delay = function(time) {
    time = time || config.scenarioTimeout;
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, time);
    });
};

module.exports = utils;