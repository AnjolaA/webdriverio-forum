Feature: Title check
    I should be able to go to a Forum Website
    and check its Page Title

Scenario: Get the title of Homepage
    Given I go to the website "/"
    When I login with username and password "zero\aaw05" and "Password1"
    Then I expect the title of the page "Sky Forum"
