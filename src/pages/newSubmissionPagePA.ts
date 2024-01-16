import {Page, expect} from "@playwright/test"

export default class NewSubmissionPagePA{

    constructor(private page:Page){

        this.page= page;
    }

   
    public Elements= {
        actions:"//*[@id='AccountFile:AccountFileMenuActions-btnEl']",
        new_Submission:"//*[@id='AccountFile:AccountFileMenuActions:AccountFileMenuActions_Create:AccountFileMenuActions_NewSubmission-itemEl']",
        personal_Auto:"//*[@id='NewSubmission:NewSubmissionScreen:ProductOffersDV:ProductSelectionLV:6:addSubmission']",
        offering_Selection:"//*[@id='SubmissionWizard:OfferingScreen:OfferingSelection-inputEl']",
        next:"//*[@id='SubmissionWizard:Next-btnInnerEl']",
        term_Type:"//*[@id='SubmissionWizard:LOBWizardStepGroup:SubmissionWizard_PolicyInfoScreen:SubmissionWizard_PolicyInfoDV:PolicyInfoInputSet:TermType-inputEl']",
        add_Drvier:"//*[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriversLV_tb:AddDriver-btnInnerEl']",
        newPerson_Driver:"//*[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriversLV_tb:AddDriver:0:ContactType-textEl']",
        first_Name:"//*[@id='NewPolicyDriverPopup:ContactDetailScreen:NewPolicyContactRoleDetailsCV:PolicyContactDetailsDV:PolicyContactRoleNameInputSet:GlobalPersonNameInputSet:FirstName-inputEl']",
        last_Name:"//*[@id='NewPolicyDriverPopup:ContactDetailScreen:NewPolicyContactRoleDetailsCV:PolicyContactDetailsDV:PolicyContactRoleNameInputSet:GlobalPersonNameInputSet:LastName-inputEl']",
        dateOfBirth:"//*[@id='NewPolicyDriverPopup:ContactDetailScreen:NewPolicyContactRoleDetailsCV:PolicyContactDetailsDV:PolicyContactRoleNameInputSet:DateOfBirth-inputEl']",
        addressOne:"//*[@id='NewPolicyDriverPopup:ContactDetailScreen:NewPolicyContactRoleDetailsCV:PolicyContactDetailsDV:AddressInputSet:globalAddressContainer:GlobalAddressInputSet:AddressLine1-inputEl']",
        city :"//*[@id='NewPolicyDriverPopup:ContactDetailScreen:NewPolicyContactRoleDetailsCV:PolicyContactDetailsDV:AddressInputSet:globalAddressContainer:GlobalAddressInputSet:City-inputEl']",
        address_Type:"//*[@id='NewPolicyDriverPopup:ContactDetailScreen:NewPolicyContactRoleDetailsCV:PolicyContactDetailsDV:AddressType-inputEl']",
        License_No:"//*[@id='NewPolicyDriverPopup:ContactDetailScreen:NewPolicyContactRoleDetailsCV:PolicyContactDetailsDV:LicenseInputSet:LicenseNumber-inputEl']",
        license_State_Driver:"//*[@id='NewPolicyDriverPopup:ContactDetailScreen:NewPolicyContactRoleDetailsCV:PolicyContactDetailsDV:LicenseInputSet:LicenseState-inputEl']",
        ok_Driver:"//*[@id='NewPolicyDriverPopup:ContactDetailScreen:Update-btnInnerEl']",
        roles:"//*[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:RolesCardTab-btnInnerEl']",
        year_licensed:"//*[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:0:PolicyContactRolePanelSet:PolicyDriverInfoDV:yearlicensed-inputEl']",
        noOfAccidents_Account:"(//div[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:0:PolicyContactRolePanelSet:2-body']//tr)[1]//td[3]",
        noOfAccidents_Policy:"(//div[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:0:PolicyContactRolePanelSet:2-body']//tr)[1]//td[2]",
        noOfVoilations_Account:"(//div[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:0:PolicyContactRolePanelSet:2-body']//tr)[2]//td[3]",
        noOfVoilations_Policy:"(//div[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:0:PolicyContactRolePanelSet:2-body']//tr)[2]//td[2]",
        value0:"(//li[contains(text(),'0') and not(contains(@id,\"ext-element\"))])[1]",
        create_Vehicle:"//*[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PAVehiclesScreen:PAVehiclesPanelSet:VehiclesListDetailPanel_tb:Add-btnInnerEl']",
        vehicle_Type:"//*[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PAVehiclesScreen:PAVehiclesPanelSet:VehiclesListDetailPanel:VehiclesDetailsCV:PersonalAuto_VehicleDV:Type_DV-inputEl']",
        VIN:"//*[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PAVehiclesScreen:PAVehiclesPanelSet:VehiclesListDetailPanel:VehiclesDetailsCV:PersonalAuto_VehicleDV:Vin_DV-inputEl']",
        license_State_Vehicle:"//*[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PAVehiclesScreen:PAVehiclesPanelSet:VehiclesListDetailPanel:VehiclesDetailsCV:PersonalAuto_VehicleDV:LicenseState_DV-inputEl']",
        cost_New:"//*[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PAVehiclesScreen:PAVehiclesPanelSet:VehiclesListDetailPanel:VehiclesDetailsCV:PersonalAuto_VehicleDV:CostNew_DV-inputEl']",
        add_Assign_Driver:"//*[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PAVehiclesScreen:PAVehiclesPanelSet:VehiclesListDetailPanel:VehiclesDetailsCV:PersonalAuto_AssignDriversDV:DriverPctLV_tb:AddDriver-btnInnerEl']",
        add_Driver_Assign:"//*[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PAVehiclesScreen:PAVehiclesPanelSet:VehiclesListDetailPanel:VehiclesDetailsCV:PersonalAuto_AssignDriversDV:DriverPctLV_tb:AddDriver:0:Driver-textEl']",
        auto_Liability_Package:"//*[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PersonalAutoScreen:PersonalAuto_AllVehicleCoveragesDV:PALiabCategoryIterator:0:CoverageInputSet:CovPatternInputGroup:LiabilityTermInput-inputEl']",
        medical_Limit:"//*[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PersonalAutoScreen:PersonalAuto_AllVehicleCoveragesDV:PALiabCategoryIterator:1:CoverageInputSet:CovPatternInputGroup:0:CovTermInputSet:OptionTermInput-inputEl']",
        uninsured_Motorist_BI_Limits:"//*[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PersonalAutoScreen:PersonalAuto_AllVehicleCoveragesDV:PALiabCategoryIterator:2:CoverageInputSet:CovPatternInputGroup:0:CovTermInputSet:PackageTermInput-inputEl']",
        uninsured_Motorist_Property_Damage_Limit:"//*[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PersonalAutoScreen:PersonalAuto_AllVehicleCoveragesDV:PALiabCategoryIterator:3:CoverageInputSet:CovPatternInputGroup:0:CovTermInputSet:OptionTermInput-inputEl']",
        quote:"//*[@id='SubmissionWizard:SubmissionWizard_PolicyReviewScreen:JobWizardToolbarButtonSet:QuoteOrReview-btnInnerEl']",
        bind_Options:"//*[@id='SubmissionWizard:SubmissionWizard_PaymentScreen:JobWizardBillingToolbarButtonSet:BindOptions-btnInnerEl']",
        issue_Policy:"//*[@id='SubmissionWizard:SubmissionWizard_PaymentScreen:JobWizardBillingToolbarButtonSet:BindOptions:BindAndIssue-textEl']",
        bind_Only:"//*[@id='SubmissionWizard:SubmissionWizard_PaymentScreen:JobWizardBillingToolbarButtonSet:BindOptions:BindOnly-itemEl']",
        warning_Message_Ok:"//*[text()='OK']",
        tittle_Bar_Status:"//*[@id='JobComplete:JobCompleteScreen:ttlBar']",
        policy_Number:"//*[@id='PolicyFile_Summary:Policy_SummaryScreen:Policy_Summary_PolicyDV:PolicyNumber-inputEl']",
        view_Your_Policy:"//*[@id='JobComplete:JobCompleteScreen:JobCompleteDV:ViewPolicy-inputEl']",
        product_Name:"//*[@id='PolicyFile_Summary:Policy_SummaryScreen:Policy_Summary_PolicyDV:Product-inputEl']",
        effective_Date:"//*[@id='PolicyFile_Summary:Policy_SummaryScreen:Policy_Summary_DatesDV:PolicyPerEffDate-inputEl']",
        expiry_Date:"//*[@id='PolicyFile_Summary:Policy_SummaryScreen:Policy_Summary_DatesDV:PolicyPerExpirDate-inputEl']",
        policy_Transactions:"//*[@id='PolicyFile:MenuLinks:PolicyFile_PolicyFile_Jobs']",
        policy_Current_Status:"//div[@id='PolicyFile_Jobs/DetailsTitleCard']//table//table[1]//tr//td[5]//div",
	
    }



}