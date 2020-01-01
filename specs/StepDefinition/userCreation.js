var Users = require('../pages/users');
var loginSuccess = require('../pages/login');
browser.manage().timeouts().implicitlyWait(20000) ;
const{Given, When, Then, After, Before}= require('cucumber');

Before({tags: "@global"}, function(){
   loginSuccess.openUrl();
   loginSuccess.setUserNameGlobaly();
   loginSuccess.setPasswordGlobally();
   loginSuccess.clickSubmit();
});

After({tags: "@global"}, function(){
    browser.close();
 });

Given('User is already logged in to salesforce account', function(callback){
   loginSuccess.verifyTitle().then(callback);
});

When('User clicked on users tab', function(callback){
    Users.clickUserTab().then(callback);
});

When('User clicked on users link', function(callback){
   Users.clickUserLink().then(callback);
});

When('User clicked on new user button', function(callback){
  Users.clickNewUserButton().then(callback);
 });

When('User enters first name as {string} , last name as {string} , email as {string} in new user form', function(fname,lname,emailid, callback){
    Users.setFirstName(fname);
    Users.setLastName(lname);
    Users.setAlias();
    Users.setEmail(emailid);
    Users.setUserName().then(callback);
   });

/**When('User enters required values on new user form', function(table, callback){
    var rows = table.hashes();
    __.each(rows, function(row))

    Users.firstNameExists.sendKeys(rows[0].fname).then(callback);

});*/

Then('User clicked on save button', function(callback){
    Users.clickSaveButton().then(callback);
});