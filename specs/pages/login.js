var salesForceLogin = function(){
    var userName = element(by.id('username'));
    var password = element(by.id('password'));
    var logInButton = element(by.id('Login'));
    var loginFailureMessage= element(by.id("error"));
    var logger = require('../utils/Logging');
    var wait= 20000;
    browser.manage().timeouts().implicitlyWait(20000) ;
    const expect= require('chai').expect;
    
    //Code to open salesforce login page url
    this.openUrl= function(){
        browser.waitForAngularEnabled(false);
        return browser.get(browser.params.url).then(function(){
        logger.write("Sales force login page open successfully");
        });
    };
   
    //Code to enter username 
    this.setUserName = function(username){
        return userName.sendKeys(username).then(function(){
        logger.write("User enter username successfully");
        });
    };
     //Code to enter username globally use in hooks
    this.setUserNameGlobaly = function(){
        return userName.sendKeys(browser.params.username).then(function(){
        logger.write("User enter username successfully");
        });
    };

    //Code to enter password 
    this.setPassword = function(pwd){
        return password.sendKeys(pwd).then(function(){
        logger.write("User enter password successfully");    
        });
        
    };

    //Code to enter password globally use in hooks
    this.setPasswordGlobally = function(){
        return password.sendKeys(browser.params.password).then(function(){
        logger.write("User enter password successfully");    
        });
        
    };
    // Code to click on login button
    this.clickSubmit = function(){
        return logInButton.click().then(function(){
        logger.write('User click on login button successfully');
        });
    };
    // Code to verify title of dasboard
    this.verifyTitle = function(){
        browser.sleep(wait);
        return browser.getTitle().then(function(title){
            expect(title).to.equal(browser.params.DashboardTitle);
            logger.write("Dashboard title verified sucessfully");
        });
    };
    // Code to verify failed login error message
    this.verifyLoginFailure = function(){
        return loginFailureMessage.getText().then(function(errorMessage){
            expect(errorMessage).to.equal(browser.params.LoginFailureMessage);
            logger.write("Login failed and error message verified successfully");
        })
        
        
    };
};
module.exports = new salesForceLogin();