Feature: Employees

  Scenario: Employee List

    Given I open Employee List page
    Then the title is "Employee List"
    And the Google search form exists
    Then I type keyword Cucumber.js and click search
