function Calculator() {
	this.count = 0;
}
Calculator.prototype = {
	add: function(a, b) {
		this.count = Number(a) + Number(b);
	},
	clear: function() {
		this.count = 0;
	},
	result: function() {
		return this.count;
	}
};

module.exports = Calculator;