var expect = require('chai').expect;
console.log(expect);
var CalcFunctSteps = function() {
    this.World = require('../support/worldTest.js').WorldTest;

    this.Given(/^the calculator is cleared$/, function(callback) {
        this.calculator.clear();
        callback();
    });

    this.When(/^I add (-?\d+) and (-?\d+)$/, function(a, b, callback) {
        this.calculator.add(a,b);
        callback();
    });

    this.Then(/^the result should be (-?\d+)$/, function(result, callback) {
        expect(this.calculator.result()).to.equal(Number(result));
        callback();
    });
};

module.exports = CalcFunctSteps;