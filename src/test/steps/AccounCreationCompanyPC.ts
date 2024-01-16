import{Given,When,Then,setDefaultTimeout} from "@cucumber/cucumber"
import{Page} from "@playwright/test"
import { fixture } from "../../hooks/pageFixture"
import AccountCreationPC from "../../pages/accountCreationPagePC"

setDefaultTimeout(60 * 1000 * 20)
let accCreation: AccountCreationPC;
accCreation = new AccountCreationPC(fixture.page);
When('User should enter the all mandatory fields in Enter Account info page {string} and click search button', async function (companyName) {
    
    await fixture.page.locator(accCreation.Elements.action).click();
    await fixture.page.locator(accCreation.Elements.account_ceation).click();
    await fixture.page.locator(accCreation.Elements.company_name).fill(companyName);
    await fixture.page.locator(accCreation.Elements.search).click();
    await fixture.page.locator(accCreation.Elements.new_account).click();
    await fixture.page.locator(accCreation.Elements.company).click();
  });

  Then('User should able to Company Account file Summary page', async function () {
    const accNo = await fixture.page.locator(accCreation.Elements.Get_account_number).textContent();
    console.log("The Company Account Number is "+ accNo);
    const accStatus = await fixture.page.locator(accCreation.Elements.status).textContent();
    console.log("The Company Account Status is "+ accStatus);
  });