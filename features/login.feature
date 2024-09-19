Feature: Login to the Omayo application

@Login @All
Scenario Outline: User should be able to login with valid credentials
Given I visit the omayo website
When I enter Username as <username> and Password <password> into the fields
And I click on Login button
Then I should get logged in based on expected <loginstatus> status
Examples:
|username				|password		|loginstatus|
|arun						|pswd1			|failure		|
|SeleniumByArun	|Test143$		|success		|
|motoori				|pswd2			|failure		|
