package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class FacebookPage {

    public FacebookPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(id ="email")
    public WebElement email;

    @FindBy (id = "pass")
    public WebElement password;

    @FindBy (css = "#u_0_b")
    public  WebElement loginButton;

    @FindBy(xpath = "(//*[contains(text(),'Welcome')])[2]")
    public  WebElement welcomeMessage;




}
