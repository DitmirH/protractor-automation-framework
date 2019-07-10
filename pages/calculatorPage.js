var Calculator = function() {
	var firstNumber = element(by.model('first'));
	var secondNumber = element(by.model('second'));
	const operatorSelect = element(by.model('operator'));

	this.setNumbers = function(num1, num2) {
		firstNumber.sendKeys(num1);
		secondNumber.sendKeys(num2);
	};

	this.operatorSelect = function(operator) {
		operatorSelect.$(`[value=${operator}]`).click();
	};
};
module.exports = new Calculator();
