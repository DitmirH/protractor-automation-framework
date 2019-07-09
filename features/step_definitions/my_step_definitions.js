const { Given, Then, When } = require('cucumber');
const firstNumber = element(by.model('first'));
const secondNumber = element(by.model('second'));
const goBtn = element(by.id('gobutton'));
const operatorSelect = element(by.model('operator'));
chai = require('chai');
expect = chai.expect;
// const { expect } = require('chai');

Given('I go to {string}', function(url) {
	browser.get(url);
	console.log('working test');

	var until = protractor.ExpectedConditions;
	browser.wait(
		until.presenceOf(firstNumber),
		5000,
		'Element taking too long to appear in the DOM',
	);
});
When('I enter the numbers as {string} and {string}', function(num1, num2) {
	// console.log(page);
	console.log('page');

});

When('I select the {string} operator for the 2 numbers', function(operator) {
	expect('foo').to.equal('foo');
});

Then('I can see the result is {string}', function(result) {
	console.log('---');
});
