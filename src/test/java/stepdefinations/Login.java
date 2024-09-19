package stepdefinations;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;


public class Login {

	WebDriver driver;
	
	@Before("@Login")
	public void setup() {
		
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	}
	
	@After("@Login")
	public void tearDown() {
		
		driver.quit();
		
	}

	@Given("^I visit the omayo website$")
	public void i_visit_the_omayo_website() {
		
		driver.get("http://omayo.blogspot.com/");

	}

	@When("^I enter Username as (.+) and Password (.+) into the fields$")
	public void i_enter_username_and_password_into_the_fields(String username, String password)  {
	    driver.findElement(By.xpath("//input[@name='userid']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@name='pswrd']")).sendKeys(password);
	    	
	}

	@Then("^I should get logged in based on expected (.+) status$")
	public void i_should_get_logged_in_based_on_expected_status(String loginstatus) {
		
		String actualStatus = "failure";
		
		try {
			
			Alert alert = driver.switchTo().alert();
			
			if(alert.getText().equals("Error Password or Username")) {
				
				actualStatus = "failure";
			}
		
		}catch(Throwable t) {
			
			actualStatus = "success";
			
		}
	
		Assert.assertEquals(actualStatus, loginstatus);
	
	}

	@And("^I click on Login button$")
	public void i_click_on_login_button() {
		
		driver.findElement(By.cssSelector("input[type='button'][value='Login']")).click();

	}
}
