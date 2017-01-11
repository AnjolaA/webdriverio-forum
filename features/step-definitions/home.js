const expect = require('chai').expect;
var login = require('../support/login')


module.exports = function () {

  this.Given(/^I go to the website "([^"]*)"$/, (url) => {
  browser.windowHandleMaximize(["current"]);
  //browser.options.baseUrl;
  browser.url(url);
  browser.pause(2000);
  });


  this.When(/^I login with username and password "([^"]*)" and "([^"]*)"$/,
  login

  );

  this.Then(/^I expect the title of the page "([^"]*)"$/, (title) => {
    expect(browser.getTitle()).to.be.eql(title);
  });

}
