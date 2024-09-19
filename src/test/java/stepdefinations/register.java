package stepdefinations;

import java.util.Date;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import base.Base;
import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import pageobjects.HomePage;

public class register extends Base {
	
	WebDriver driver;
	
	@Before("@Register")
	public void setup() {
		
		loadProjectDataProperties();
		driver = initializeBrowser(prop.getProperty("browser"));
		
	}
	
	@After("@Register")
	public void tearDown() {
		
		driver.quit();
		
	}
	
	@Given("^I visit the website$")
    public void i_visit_the_website(){
		
		driver.get(prop.getProperty("url"));
		
    }

    @When("^I enter all the valid details into the Register Account page fields$")
    public void i_enter_all_the_valid_details_into_the_register_account_page_fields(DataTable datatable) {
        
    	Map<String, String> cmap = datatable.asMap(String.class,String.class);
    	
    	driver.findElement(By.id("input-firstname")).sendKeys(cmap.get("firstname"));
    	driver.findElement(By.id("input-lastname")).sendKeys(cmap.get("lastname"));
    	String randomEmailAddress = null;
    	String originalEmail = cmap.get("email");
    	String[] emailParts = originalEmail.split("@");
    	randomEmailAddress = emailParts[0]+getTimeStamp()+"@"+emailParts[1];
    	driver.findElement(By.id("input-email")).sendKeys(randomEmailAddress);
    	driver.findElement(By.id("input-telephone")).sendKeys(cmap.get("telephone"));
    	driver.findElement(By.id("input-password")).sendKeys(cmap.get("password"));
    	driver.findElement(By.id("input-confirm")).sendKeys(cmap.get("password"));
    	
    }

    @Then("^I need to be taken to Account succes page$")
    public void i_need_to_be_taken_to_account_succes_page() {
    	
    	Assert.assertTrue(driver.findElement(By.linkText("Success")).isDisplayed());
        
    }

    @And("^I navigate to Register Account page$")
    public void i_navigate_to_register_account_page() {
    	
    	HomePage homePage = new HomePage(driver);
    	
    	homePage.selectMyAccountMenu();
    	homePage.selectRegisterOption();
     
    }

    @And("^I select the Privacy Policy option$")
    public void i_select_the_privacy_policy_option() {
    	
    	driver.findElement(By.name("agree")).click();
        
    }

    @And("^I click on Continue button$")
    public void i_click_on_continue_button() {
    	
    	driver.findElement(By.cssSelector("input[value='Continue']")).click();
        
    }
    
    public String getTimeStamp() {
		
		Date date = new Date();
		String timeStampModified = date.toString().replaceAll(" ","_").replaceAll(":","_");
		return timeStampModified;
		
	}

}
