package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.FacebookPage;
import utilities.Driver;

public class Facebook_Stepdefinitions {
FacebookPage facebookPage=new FacebookPage();

    @Given("user is on the facebook login page")
    public void user_is_on_the_facebook_login_page() {
        Driver.getDriver().get("https://www.facebook.com/");
    }

    @Given("user enters email in  the email box {string}")
    public void user_enters_email_in_the_email_box(String string) {
facebookPage.email.sendKeys(string);
    }
    @Given("user enters password in the password box {string}")
    public void user_enters_password_in_the_password_box(String string) {
facebookPage.password.sendKeys(string);
    }
    @Then("user clicks on the login button")
    public void user_clicks_on_the_login_button() {
facebookPage.loginButton.click();
    }

    @Then("user verifies the login is successful or not")
    public void user_verifies_the_login_is_successful_or_not() {

        WebDriverWait wait=new WebDriverWait(Driver.getDriver(),5);
        wait.until(ExpectedConditions.visibilityOf(facebookPage.welcomeMessage));

        Assert.assertTrue(facebookPage.welcomeMessage.isDisplayed());

//        JavascriptExecutor js = (JavascriptExecutor)Driver.getDriver();
//        String text = js.executeScript("return document.getElementById('some_id').innerHTML").toString();

       //  getAttribute("textContent") work
    }






}
