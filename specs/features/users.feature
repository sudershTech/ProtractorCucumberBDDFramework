Feature: Test the create new user functionality of sales force

Background: 
 Given User is already logged in to salesforce account 
 
@global
Scenario Outline: Create new user in salesforce

When User clicked on users tab
And User clicked on users link
And User clicked on new user button
And User enters first name as "<fname>" , last name as "<lname>" , email as "<emailid>" in new user form
#And User enters required values on new user form
#| fname | lname | emailid        |
#| sud   | xyz   | sud7@gmail.com |

Then User clicked on save button

Examples:
  | fname    | lname         | emailid      |
  | Sudersh  | xyz           | sud7@gmail.com|


