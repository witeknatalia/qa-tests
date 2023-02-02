Feature: The details should be connect with search results

  Scenario: Check displayed details
    When the url is default
    And The user select Country and City
    And The user sets pickup and dropoff date
    And The user check car
    Then The display details are correct with search result
