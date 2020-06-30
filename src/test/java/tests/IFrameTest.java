package tests;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class IFrameTest {

   WebDriver driver;
    @Before
    public void setUp(){
        WebDriverManager.chromedriver().setup();
        driver=new ChromeDriver();
        driver.get("https://www.facebook.com/");
    }
    @Test
    public void iframeTest(){
        WebElement iframe=driver.findElement(By.xpath("//iframe[@id='captcha-recaptcha']"));
        System.out.println(iframe.getText());
    }
}
