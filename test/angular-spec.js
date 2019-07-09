// import calculator from './calculatorPage';
var calculator = require('../pages/calculatorPage');

describe('Angular App', function() {
	// const firstNumber = element(by.model('first'));
	// const secondNumber = element(by.model('second'));
	const goBtn = element(by.id('gobutton'));
	// const operatorSelect = element(by.model('operator'));
	const result = element.all(by.css('.ng-binding')).first();

	it('goes to the calculator page ', function() {
		browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
	});

	it('fills in the numbers required ', function() {
		calculator.setNumbers(6, 6);
	});

	it('selects the addition operator ', function() {
		// operatorSelect.$('[value="DIVISION"]').click();
		calculator.operatorSelect('ADDITION');
		goBtn.click();
	});

	it('checks they have been added correctly', function() {
		expect(result.getText()).toEqual('1');
	});
});
