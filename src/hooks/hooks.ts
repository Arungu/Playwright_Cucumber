import {Before, BeforeAll ,After,AfterAll, Status, Given, When, Then} from "@cucumber/cucumber"
import {chromium, Browser, Page, BrowserContext} from"@playwright/test"
import {fixture} from "../hooks/pageFixture"
import { invokeBrowser } from "../helper/browser/browserManager";
import { getEnv } from "../helper/env/env";
import LoginPage from "../pages/loginPage";

let page: Page;
let browser: Browser;
let context: BrowserContext
let loginPage: LoginPage;

BeforeAll(async function () {
     getEnv();
     browser = await invokeBrowser();
    //  context = await browser.newContext();
    //  page = await browser.newPage();
    //  fixture.page = page;
});
Before(async function () {
    context = await browser.newContext();
    page = await browser.newPage();
    fixture.page = page;

    loginPage = new LoginPage(fixture.page);
    await fixture.page.goto(process.env.PCURL);
    await fixture.page.locator(loginPage.Elements.userName).fill('exp_test');
    await fixture.page.locator(loginPage.Elements.password).fill('exp_test');
    await fixture.page.locator(loginPage.Elements.loginBtn).click();
   
});

After(async function({pickle,result}){

    if(result?.status==Status.FAILED){
        const img = await fixture.page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`, type:"png"})
        await this.attach(img,"image/png");
    }
   await fixture.page.close();
   await context.close();

});
AfterAll(async function(){
    // await fixture.page.close();
    // await context.close();
    await browser.close();

});