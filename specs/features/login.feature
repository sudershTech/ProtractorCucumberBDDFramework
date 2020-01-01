Feature: Test the login functionality of sales force

Background: 
 Given Launch browser and hit url of salesforce 

Scenario Outline: Successfull login salesforce application and verify dashboard page title

  When User enters username as "<username>"
  And User enters password as "<pwd>"
  And User clicks on login button 
  Then Verify the page title of salesforce dashboard page

Examples:
  | username               | pwd        |
  | sudershs@interrait.com | sudersh123 |

Scenario Outline: Unsuccessfull login and verify error message

  When User enters username as "<username>"
  When User enters incorrect password as "<pwd>"
  And  User clicks on login button 
  Then Verify the login failed error message

Examples:
  | username               | pwd        |
  | sudershs@interrait.com | sudersh12  |
