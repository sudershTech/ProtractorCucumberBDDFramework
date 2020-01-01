var loginSuccess = require('../pages/login');
browser.manage().timeouts().implicitlyWait(20000) ;
const{Given, When,Then}= require('cucumber');


Given('Launch browser and hit url of salesforce', function(callback){
   loginSuccess.openUrl().then(callback);
});

When('User enters username as {string}', function( username, callback){
    loginSuccess.setUserName(username).then(callback);
});

When('User enters password as {string}', function( pwd, callback){
   loginSuccess.setPassword(pwd).then(callback);
});

When('User clicks on login button', function(callback){
  loginSuccess.clickSubmit().then(callback);
 });

Then('Verify the page title of salesforce dashboard page', function(callback){
   loginSuccess.verifyTitle().then(callback);
});
