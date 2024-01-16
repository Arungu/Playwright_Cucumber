import {Page, expect} from "@playwright/test"

export default class SearchAccountPC{

    constructor(private page:Page){

        this.page= page;
    }

   
    public Elements= {
      searchTab: "//*[@id='TabBar:SearchTab-btnInnerEl']",
	  accountsOptions: "//*[@id='Search:MenuLinks:Search_AccountSearch']",
	  accNo: "//*[@id='AccountSearch:AccountSearchScreen:AccountSearchDV:AccountNumber-inputEl']",
	  searchbtn:"//*[@id='AccountSearch:AccountSearchScreen:AccountSearchDV:SearchAndResetInputSet:SearchLinksInputSet:Search']",
      selectAcc:"//*[@id='AccountSearch:AccountSearchScreen:AccountSearchResultsLV:0:AccountNumber']"
      
	  
    }

	

}