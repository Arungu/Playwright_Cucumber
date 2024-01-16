import{Given,When,Then,setDefaultTimeout} from "@cucumber/cucumber"
import{Page} from "@playwright/test"
import { fixture } from "../../hooks/pageFixture"
import AccountCreationPC from "../../pages/accountCreationPagePC"
import LoginPage from "../../pages/loginPage"

setDefaultTimeout(60 * 1000 * 20)
let accCreation: AccountCreationPC;
let loginPage: LoginPage
  Given('User in Home page', async function () {
  //  loginPage = new LoginPage(fixture.page);
    accCreation = new AccountCreationPC(fixture.page);
    
   
  });

  When('User should enter the all mandatory fields in Enter Account info page {string} , {string} and click search button', async function (firstName, lastName) {
   
    await fixture.page.locator(accCreation.Elements.action).click();
    await fixture.page.locator(accCreation.Elements.account_ceation).click();
    await fixture.page.locator(accCreation.Elements.fn).fill(firstName);
    await fixture.page.locator(accCreation.Elements.ln).fill(lastName);
    await fixture.page.locator(accCreation.Elements.search).click();
    await fixture.page.locator(accCreation.Elements.new_account).click();
    await fixture.page.locator(accCreation.Elements.person).click();
  
  });


  When('User should enter the all mandatory fields in Account creation page {string},{string},{string} and click on organization search button', async function (addressOne,city,addressType) {
  
    //await fixture.page.locator(accCreation.Elements.first_name).fill(firstName);
   // await fixture.page.locator(accCreation.Elements.last_name).fill(lastName);
    await fixture.page.locator(accCreation.Elements.address1).fill(addressOne);
    await fixture.page.locator(accCreation.Elements.city).fill(city);
    await fixture.page.locator(accCreation.Elements.address_type).fill(addressType);
    await fixture.page.locator(accCreation.Elements.origanization).click();
  });


  When('User should enter the all mandatory fields in Organization page {string} and click search button and select the organization', async function (organizationType) {
    
    await fixture.page.locator(accCreation.Elements.origanization_type).fill(organizationType);
    await fixture.page.locator(accCreation.Elements.search_origanization).click();
    await fixture.page.locator(accCreation.Elements.select_origanization).click();
  });



  When('User should enter the {string} and click update button', async function (producerCode) {
    await fixture.page.locator(accCreation.Elements.producer_code).fill(producerCode);
    await fixture.page.locator(accCreation.Elements.update).click();
  });


  Then('User should able to Person Account file Summary page', async function () {
    const accNo = await fixture.page.locator(accCreation.Elements.Get_account_number).textContent();
    console.log("The Person Account Number is "+ accNo);
    const accStatus = await fixture.page.locator(accCreation.Elements.status).textContent();
    console.log("The Person Account Status is "+ accStatus);
    
  });