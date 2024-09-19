package stepdefinations;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Search {
	
	@Given("^I visit the website as a guest user$")
    public void i_visit_the_website_as_a_guest_user() {
		
		System.out.println("Given >> I visit the website as a guest user ");
        
    }

    @When("^I select Books category from the search dropdown$")
    public void i_select_books_category_from_the_search_dropdown() {
    	
    	System.out.println("When >> I select Books category from the search dropdown ");
        
    }
    
    @And("^I click on Search icon button$")
    public void i_click_on_search_icon_button() {
    	
    	System.out.println("And >> I click on Search icon button");
        
    }

    @Then("^I should see the Search Results page for Books category is loaded$")
    public void i_should_see_the_search_results_page_for_books_category_is_loaded() {
    	
    	System.out.println("Then >> I should see the Search Results page for Books category is loaded");
        
    }

    @And("^I should see the Books hot off the press as page heading$")
    public void i_should_see_the_books_hot_off_the_press_as_page_heading() {
    	
    	System.out.println("And >> I should see the Books hot off the press as page heading");
        
    }

    @But("^I should not other category products$")
    public void i_should_not_other_category_products(){
        
    	System.out.println("But >> I should not other category products");
     	
    }
    
    @When("^I select Baby category from the search dropdown$")
    public void i_select_baby_category_from_the_search_dropdown()  {
        
    	System.out.println("When >> I select Baby category from the search dropdown");
    	
    }

    @Then("^I should see the Search Results page for Baby category is loaded$")
    public void i_should_see_the_search_results_page_for_baby_category_is_loaded(){
        
    	System.out.println("Then >> I should see the Search Results page for Baby category is loaded");
    	
    }

    @And("^I should see the Baby Products as page heading$")
    public void i_should_see_the_baby_products_as_page_heading() {
    	
    	System.out.println("And >> I should see the Baby Products as page heading");
        
    }


}
