const expect = require('chai').expect;
var login = require('../support/login');
var topicsPage = require('../pageobjects/topicspage');


module.exports = function () {

this.Then(/^I expect the "([^"]*)" to be visible$/, function (title, callback) {
  // Write code here that turns the phrase above into concrete actions

  //var pageName = browser.getText("//*[@id='react-site-container']/div/div[2]/main/div/h3");
  var pageName = topicsPage.pageName();
  console.log("page name is " + topicsPage.pageName());
  expect(pageName).to.be.eql(title);
  callback();
});

}
