Feature: Title check
    I should be able to go to a Forum Website
    and check its Page Title

Scenario: Get the title of Topics page
    Given I go to the website "/topics"
    When I login with username and password "zero\aaw05" and "Password1"
    Then I expect the "Topics" to be visible
