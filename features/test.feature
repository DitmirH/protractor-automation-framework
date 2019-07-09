Feature: Running Cucumber with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    Scenario: Calculator
        Given I go to "http://www.way2automation.com/angularjs-protractor/calc/"
        When I enter the numbers as "5" and "7"
        And I select the "ADDITION" operator for the 2 numbers
        Then I can see the result is "12"