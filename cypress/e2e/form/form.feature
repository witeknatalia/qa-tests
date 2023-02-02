Feature: Display of errors when data isn't as required

  Scenario: Check the correctness of the data in the form
    When The form is displayed
    And Previous steps are done
    And The user fill in all required inputs not in accordance with the requirements
    Then The errors should be visible
