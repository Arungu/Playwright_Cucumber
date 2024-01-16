Feature: Account Management 

Scenario Outline: Verify Withdraw Account
Given User in Home page 
When User should enter the all mandatory fields in Enter Account info page "<firstName>" , "<lastName>" and click search button 
When User should enter the all mandatory fields in Account creation page "<addressOne>","<city>","<addressType>" and click on organization search button
When User should enter the all mandatory fields in Organization page "<organizationType>" and click search button and select the organization
When User should enter the "<producerCode>" and click update button
Then User should able to Person Account file Summary page
When User click withdraw account in action menu on Account file Summary page
Then User should able to see account status is Withdrawn

Examples:
|username|password|firstName|lastName|addressOne|city|addressType|organizationType|producerCode|
|exp_test|exp_test|Test   |automation|1A|Alys Beach|Billing|Insurer|Standard Code Internal Producer Code - 1|

# Scenario Outline: Verify Reopen Account
# Given User in Home page 
# When User click on search tab and click on Accounts moudule
# When User enter the exiting account number and click search button and select acount 
# Then User should able to Person Account file Summary page
# When User click reopen account in action menu on Account file Summary page
# Then User should able to see account status is Pending

# Examples:
# |username|password|firstName|lastName|addressOne|city|addressType|organizationType|producerCode|
# |exp_test|exp_test|Test   |automation|1A|Alys Beach|Billing|Insurer|Standard Code Internal Producer Code - 1|