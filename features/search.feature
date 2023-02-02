Feature: The searching result should be displayed

  Scenario: Display search results
    Given Search results are displayed
    When the url is /
    And The user select Country to "Poland" and City to "Cracow"
    And the user sets pickup and dropoff date to "2023-06-06"
    Then The user clicks "Search" button
