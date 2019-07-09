// spec.js
describe('Protractor Demo App', function() {
	const searchBar = element(by.css('[name="q"]'));
	const searchresults = element(by.id('search'));

	it('should go to google', function() {
		browser.waitForAngularEnabled(false);
		browser.get('https://www.google.co.uk/');
		expect(browser.getTitle(searchBar)).toEqual('Google');
	});

	it('should search something in google', function() {
		searchBar.sendKeys('searching', protractor.Key.ENTER);
	});

	it('check search results are returned', function() {
		console.log('>>>>>>>');
	});
	// browser.ignoreSynchronization = true;
	// console.log('>>>>>>>', searchresults.getText());

	// expect(browser.driver.getText(searchresults)).toEqual('Google');

	// console.log(searchresults.getText());
});

// var foo = element(by.id('foo'));
// expect(foo.getText()).toEqual('Inner text');

// expect(browser.getTitle(searchBar)).toEqual('Google');
// searchBar.sendKeys('searching', protractor.Key.ENTER);
// // searchBar.sendKeys(protractor.Key.ENTER);
// // Find an element using a css selector.
// by.css('.myclass')

// // Find an element with the given id.
// by.id('myid')

// // Find an element using an input name selector.
// by.name('field_name')

// // Find an element with a certain ng-model.
// // Note that at the moment, this is only supported for AngularJS apps.
// by.model('name')

// // Find an element bound to the given variable.
// // Note that at the moment, this is only supported for AngularJS apps.
// by.binding('bindingname')
