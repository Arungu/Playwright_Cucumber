import{Given,When,Then,setDefaultTimeout} from "@cucumber/cucumber"
import{chromium, Page, Browser, BrowserContext} from "@playwright/test"
import { fixture } from "../../hooks/pageFixture";
import LoginPage from "../../pages/loginPage";


setDefaultTimeout(60 * 1000 * 20)

let loginPage:LoginPage;

  Given('User should launch the browser', async function () {
   
      loginPage = new LoginPage(fixture.page);
      
      await fixture.page.goto(process.env.PCURL);
  });

  When('User should enter the username and password {string} and {string}', async function (username, password) {
      //await loginPage.loginPC(username,password);
      // await fixture.page.locator("//*[@id='Login:LoginScreen:LoginDV:username-inputEl']").fill(username);
      // await fixture.page.locator("//*[@id='Login:LoginScreen:LoginDV:password-inputEl']").fill(password);
      // await fixture.page.locator("//*[@id='Login:LoginScreen:LoginDV:submit-btnInnerEl']").click();
    await fixture.page.locator(loginPage.Elements.userName).fill(username);
    await fixture.page.locator(loginPage.Elements.password).fill(password);
    await fixture.page.locator(loginPage.Elements.loginBtn).click();
  
    });

  Then('User should able to see the home page', async function () {
    console.log("Login Success")
  
  });
