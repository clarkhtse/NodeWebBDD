'use strict';

var _require = require('nightwatch-cucumber'),
    client = _require.client;

var _require2 = require('cucumber'),
    defineSupportCode = _require2.defineSupportCode;

defineSupportCode(function (_ref) {
    var Given = _ref.Given,
        Then = _ref.Then,
        When = _ref.When;

    Given(/^I open Employee List page$/, function () {
        return client.url('http://localhost:3000/employees').waitForElementVisible('body', 1000);
    });

    Then(/^the title is "(.*?)"$/, function (text) {
        return client.assert.title(text);
    });

    Then(/^the Google search form exists$/, function () {
        return client.assert.visible('input[name="q"]');
    });

    Then('I type keyword Cucumber.js and click search', function () {
        client.setValue('input[type=text]', 'nightwatch').waitForElementVisible('button[name=btnG]', 100110);

        // Write code here that turns the phrase above into concrete actions
        // client
        // .setValue('input[name="q"]', 'rembrandt van rijn')
        // .waitForElementVisible('button[name=btnG]', 1000)
        // .click('button[name=btnG]')
        // .pause(1000).assert.containsText('ol#rso li:first-child',
        //   'Rembrandt - Wikipedia')
        //  });
    });
});