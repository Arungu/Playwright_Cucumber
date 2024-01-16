Feature: Account Creation for Policy Center

# Scenario Outline: Verify the login page with valid credentials
# Given User should launch the browser
# When User should enter the username and password "<username>" and "<password>"
# Then User should able to see the home page

# Examples:
# |username|password|
# |exp_test|exp_test|

Scenario Outline: Verify Account creation for Person valid datas
Given User in Home page 
When User should enter the all mandatory fields in Enter Account info page "<firstName>" , "<lastName>" and click search button 
When User should enter the all mandatory fields in Account creation page "<addressOne>","<city>","<addressType>" and click on organization search button
When User should enter the all mandatory fields in Organization page "<organizationType>" and click search button and select the organization
When User should enter the "<producerCode>" and click update button
Then User should able to Person Account file Summary page

Examples:
|username|password|firstName|lastName|addressOne|city|addressType|organizationType|producerCode|
|exp_test|exp_test|Test   |automation|1A|Alys Beach|Billing|Insurer|Standard Code Internal Producer Code - 1|


Scenario Outline: Verify Account creation for Company valid datas
Given User in Home page 
When User should enter the all mandatory fields in Enter Account info page "<companyName>" and click search button 
When User should enter the all mandatory fields in Account creation page "<addressOne>","<city>","<addressType>" and click on organization search button
When User should enter the all mandatory fields in Organization page "<organizationType>" and click search button and select the organization
When User should enter the "<producerCode>" and click update button
Then User should able to Company Account file Summary page

Examples:
|companyName|addressOne|city|addressType|organizationType|producerCode|
|Test   |1A|Alys Beach|Billing|Insurer|Standard Code Internal Producer Code - 1|