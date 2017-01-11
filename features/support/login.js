module.exports = function (username, password, callback){

  browser.setValue('#userNameInput', username);
  browser.setValue('#passwordInput', password);
  browser.click('#submitButton');
  browser.pause(2000);
  callback();

}
