@checkout
Feature: Checkout as Guest on eBay

  Scenario: Checkout as Guest via Search and Product Details
    Given I am on the eBay homepage
    When I search for "Laptop" in the search bar
    And I select the product item
    And I checked if the sold amount is more than "50"
    And I navigate to checkout as guest page
    When I filled data as guest
    Then I should ready to order
