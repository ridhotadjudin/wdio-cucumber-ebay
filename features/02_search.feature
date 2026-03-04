@pilot @search
Feature: Search products on eBay

  Scenario: Access a Product via Search
    Given I am on the eBay homepage
    When I search for "MacBook" in the search bar
    And I change the search category to "Computers/Tablets & Networking"
    Then I should see results for "MacBook"
