var users = function(){
    var usersTab= element(by.xpath("//div[@class='slds-tree__item']//*[contains(text(),'Users')]"));
    var usersLink= element(by.xpath("//a[contains(@href,'/one/one.app#/setup/ManageUsers/home')]"));
    var newUserButton= element(by.xpath("//*[@id='ResetForm']/div[1]/table/tbody/tr/td[2]/input[1]"));
    var firstName= element(by.xpath("//*[@id='name_firstName']"));
    var lastName= element(by.id('name_lastName'));
    var alias= element(by.id('Alias'));
    var email= element(by.id('Email'));
    var username= element(by.id('Username'));
    var saveButton = element(by.xpath("//*[@id='bottomButtonRow']/input[1]"));
    var wait= 20000;
    var logger = require('../utils/Logging');
    browser.manage().timeouts().implicitlyWait(10000) ;
    //const expect= require('chai').expect;

    // Code to click on User Tab
    this.clickUserTab = function(){
        browser.waitForAngularEnabled(false);
        return usersTab.click().then(function(){
        logger.write("userTab clicked successfully");
        });
    };
    
    // Code to click on User link
    this.clickUserLink = function(){
        return usersLink.click().then(function(){
        logger.write("User link clicked successfully");
        });
    };

    // Code to click on new user button
    this.clickNewUserButton = function(){
        browser.sleep(wait);
        browser.switchTo().frame((element(by.xpath("//*[@id='setupComponent']/div[2]/div/force-aloha-page/div/iframe")).getWebElement()));
        return newUserButton.click().then(function(){
        logger.write("New user button clicked successfully");
        browser.switchTo().defaultContent(); 
        });
    };

    // Code to enter first name in new user form
    this.setFirstName = function(fname){
        browser.sleep(wait);
        browser.switchTo().frame((element(by.xpath("//*[@title='New User ~ Salesforce - Developer Edition']")).getWebElement()));
        return firstName.sendKeys(fname).then(function(){
        logger.write("First name entered successfully");
        });
    };

   /**  this.firstNameExists = function(fname){
        browser.sleep(wait);
        browser.switchTo().frame((element(by.xpath("//*[@title='New User ~ Salesforce - Developer Edition']")).getWebElement()));
        return firstName.sendKeys(fname);
    }*/

    // Code to enter last name in new user form
    this.setLastName = function(lname){
        return lastName.sendKeys(lname).then(function(){
        logger.write("Last name entered successfully");
        });
    };
    
    // Code to enter alias in new user form
    this.setAlias = function(){
        return alias.click().then(function(){
        logger.write("Alias entered successfully");
        });
    };

    // Code to enter emailid in new user form
    this.setEmail = function(emailid){
        return email.sendKeys(emailid).then(function(){
        logger.write("Email entered successfully");
        });
    };
 
    // Code to enter username in new user form
    this.setUserName = function(){
        return username.click().then(function(){
        logger.write("username entered successfully");
        });
    };

    // Code to click on save button in new user form
    this.clickSaveButton = function(){
        return saveButton.click().then(function(){
        browser.sleep(wait);
        logger.write("Clicked save button successfully");
        browser.close();
        });
    };

    
}
module.exports = new users();