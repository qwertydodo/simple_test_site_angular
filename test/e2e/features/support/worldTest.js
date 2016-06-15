module.exports.WorldTest = function(callback) {
	var Calculator = require('../../calculator.js');
	
	this.calculator = new Calculator();

	this.doBeforeScenario = function() {
    	console.log('Before scenario prep code');
  	};
  	this.doAfterScenario = function() {
    	console.log('After scenario cleanup code');
  	};

	//callback();
};