@pilot @filter
Feature: Apply filters to access products on eBay

  Scenario: Access a Product via category after applying multiple filters
    Given I am on the eBay homepage
    When I navigate to Electronics > Cell Phones & Smartphones
    And I apply filters for Condition, Price, and Location
    Then I should see the filters applied correctly
