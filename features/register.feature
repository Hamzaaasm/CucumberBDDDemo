Feature: Register into the TutorialsNinja application 

@Register @All @ValidRegisterDetails
Scenario: Register an account with all valid details
Given I visit the website
And I navigate to Register Account page
When I enter all the valid details into the Register Account page fields
|firstname	|Arun														|
|lastname		|Motoori												|
|email			|amotooricapgemini@gmail.com		|
|telephone	|1234567890										 	|
|password		|12345													|
And I select the Privacy Policy option
And I click on Continue button
Then I need to be taken to Account succes page