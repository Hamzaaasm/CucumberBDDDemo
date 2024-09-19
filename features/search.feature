
Feature: Searching of various categories should be possible along with general search

It is good to provide an option to our end users where they can search for the products
based on their category, rather than only searching a product.This will increase our 
business and make end users happy. 

Background: 
Given I visit the website as a guest user

@Search @Books @Smoke @All
Scenario: Search for the products under Books category

When I select Books category from the search dropdown
And I click on Search icon button
Then I should see the Search Results page for Books category is loaded
And I should see the Books hot off the press as page heading
But I should not other category products

@Search @Baby @All @Wip
Scenario: Search for the products under Baby category

When I select Baby category from the search dropdown
And I click on Search icon button
Then I should see the Search Results page for Baby category is loaded
And I should see the Baby Products as page heading
But I should not other category products