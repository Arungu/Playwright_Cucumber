import {Page, expect} from "@playwright/test"

export default class AccountCreationPC{

    constructor(private page:Page){

        this.page= page;
    }

   
    public Elements= {
      action: "//*[@id='Desktop:DesktopMenuActions-btnEl']",
	  account_ceation: "//*[@id='Desktop:DesktopMenuActions:DesktopMenuActions_Create:DesktopMenuActions_NewAccount-textEl']",
	  company_name: "//*[@id='NewAccount:NewAccountScreen:NewAccountSearchDV:GlobalContactNameInputSet:Name-inputEl']",
	  fn:"//*[@id='NewAccount:NewAccountScreen:NewAccountSearchDV:GlobalPersonNameInputSet:FirstName-inputEl']",
      ln:"//*[@id='NewAccount:NewAccountScreen:NewAccountSearchDV:GlobalPersonNameInputSet:LastName-inputEl']",
      search: "//*[@id='NewAccount:NewAccountScreen:NewAccountSearchDV:SearchAndResetInputSet:SearchLinksInputSet:Search']",
	  new_account: "//*[@id='NewAccount:NewAccountScreen:NewAccountButton-btnInnerEl']",
	  company: "//*[@id='NewAccount:NewAccountScreen:NewAccountButton:NewAccount_Company-itemEl']",
	  person: "//*[@id='NewAccount:NewAccountScreen:NewAccountButton:NewAccount_Person-itemEl']",
	  first_name: "//*[@id='CreateAccount:CreateAccountScreen:CreateAccountDV:CreateAccountContactInputSet:GlobalPersonNameInputSet:FirstName-inputEl']",
	  last_name: "//*[@id='CreateAccount:CreateAccountScreen:CreateAccountDV:CreateAccountContactInputSet:GlobalPersonNameInputSet:LastName-inputEl']",
	  address1: "//*[@id='CreateAccount:CreateAccountScreen:CreateAccountDV:AddressInputSet:globalAddressContainer:GlobalAddressInputSet:AddressLine1-inputEl']",
	  city: "//*[@id='CreateAccount:CreateAccountScreen:CreateAccountDV:AddressInputSet:globalAddressContainer:GlobalAddressInputSet:City-inputEl']",
	  postcode: "//*[@id='CreateAccount:CreateAccountScreen:CreateAccountDV:AddressInputSet:globalAddressContainer:GlobalAddressInputSet:PostalCode-inputEl']",
	  address_type: "//*[@id='CreateAccount:CreateAccountScreen:CreateAccountDV:AddressType-inputEl']",
	  origanization: "//*[@id='CreateAccount:CreateAccountScreen:CreateAccountDV:ProducerSelectionInputSet:Producer:SelectOrganization']",
	  origanization_type: "//*[@id='OrganizationSearchPopup:OrganizationSearchPopupScreen:OrganizationSearchDV:Type-inputEl']",
	  search_origanization: "//*[@id='OrganizationSearchPopup:OrganizationSearchPopupScreen:OrganizationSearchDV:SearchAndResetInputSet:SearchLinksInputSet:Search']",
	  select_origanization: "//*[@id='OrganizationSearchPopup:OrganizationSearchPopupScreen:OrganizationSearchResultsLV:0:_Select']",
	  producer_code: "//*[@id='CreateAccount:CreateAccountScreen:CreateAccountDV:ProducerSelectionInputSet:ProducerCode-inputEl']",
	  update: "//*[@id='CreateAccount:CreateAccountScreen:Update-btnInnerEl']",
	  account_name: "//*[@id='AccountFile_Summary:AccountFile_SummaryScreen:AccountFile_Summary_BasicInfoDV:Name-inputEl']",
	  Get_account_number: "//*[@id='AccountFile_Summary:AccountFile_SummaryScreen:AccountFile_Summary_BasicInfoDV:AccountNumber-inputEl']",
	  status: "//*[@id='AccountFile_Summary:AccountFile_SummaryScreen:AccountFile_Summary_BasicInfoDV:AccountStatus-inputEl']",
	  actions_accSummary: "//*[@id='AccountFile:AccountFileMenuActions-btnInnerEl']",
	  withdraw_account: "//*[@id='AccountFile:AccountFileMenuActions:AccountFileMenuActions_WithdrawAccount-textEl']",
	  reopen_account: "//*[@id='AccountFile:AccountFileMenuActions:AccountFileMenuActions_ReopenAccount-textEl']"

    }

	

}