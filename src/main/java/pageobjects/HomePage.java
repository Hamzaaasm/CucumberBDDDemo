package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
	
	WebDriver driver;
	
	public HomePage(WebDriver driver) {
		
		this.driver = driver;
		
		PageFactory.initElements(driver, this);
		
	}
	
	@FindBy(xpath="//a[@title='My Account']")
	WebElement myAccountDropMenu;
	
	@FindBy(linkText="Login")
	WebElement loginOption;
	
	@FindBy(linkText="Register")
	WebElement registerOption;
	
	public void selectMyAccountMenu() {
		
		myAccountDropMenu.click();
		
	}
	
	public void selectLoginOption() {
		
		loginOption.click();
		
	}
	
	public void selectRegisterOption() {
		
		registerOption.click();
		
	}
	
}
