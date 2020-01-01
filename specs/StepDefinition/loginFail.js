var loginFailed = require('../pages/login');
var EC = protractor.ExpectedConditions;
 browser.manage().timeouts().implicitlyWait(20000) ;
//browser.wait(EC.visibilityOf(), 20000);
//browser.sleep(10000);
const{Given, When,Then}= require('cucumber');


When('User enters incorrect password as {string}', function( pwd, callback){
   loginFailed.setPassword(pwd).then(callback);
});

Then('Verify the login failed error message', function(callback){
   loginFailed.verifyLoginFailure().then(callback);
});
