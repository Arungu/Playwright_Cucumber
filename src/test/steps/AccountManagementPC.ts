import{Given,When,Then,setDefaultTimeout} from "@cucumber/cucumber"
import { fixture } from "../../hooks/pageFixture"
import AccountCreationPC from "../../pages/accountCreationPagePC"
import { expect } from "@playwright/test";
import SearchAccountPC from "../../pages/searchAccountPagePC";
import { Base } from "../../helper/Base/base";


setDefaultTimeout(60 * 1000 * 20)
let accCreation: AccountCreationPC;
let searchAcc: SearchAccountPC;
let basefn: Base
accCreation = new AccountCreationPC(fixture.page);
searchAcc = new SearchAccountPC(fixture.page);
basefn = new Base(fixture.page);
When('User click withdraw account in action menu on Account file Summary page', async function () {
    
    await fixture.page.locator(accCreation.Elements.actions_accSummary).click();
    await fixture.page.locator(accCreation.Elements.withdraw_account).click();
    //await basefn.waitAndClick(accCreation.Elements.withdraw_account)
    //await basefn.waitAndClick(accCreation.Elements.withdraw_account);
  });

  Then('User should able to see account status is Withdrawn', async function () {
    
    await expect (fixture.page.locator(accCreation.Elements.status)).toContainText('Withdrawn');
  });

  When('User click reopen account in action menu on Account file Summary page', async function () {
    await fixture.page.locator(accCreation.Elements.actions_accSummary).click();
    await fixture.page.locator(accCreation.Elements.reopen_account).click();

  });

  Then('User should able to see account status is Pending', async function () {
    await expect (fixture.page.locator(accCreation.Elements.status)).toContainText('Pending');
  });

  When('User click on search tab and click on Accounts moudule', async function () {
   await fixture.page.locator(searchAcc.Elements.searchTab).click();
   await fixture.page.locator(searchAcc.Elements.accountsOptions).click();
  });

  When('User enter the exiting account number and click search button and select acount', async function () {
    await fixture.page.locator(searchAcc.Elements.accNo).fill('');
  });