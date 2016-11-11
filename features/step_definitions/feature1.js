var seleniumWebdriver = require('selenium-webdriver');
until = seleniumWebdriver.until;
xpath = seleniumWebdriver.By.xpath;

module.exports = function() {

    this.Given(/^I visit "([^"]*)"$/, function(url) {
        this.driver.get(url);
        var okButtonCookies = "//button[contains(., 'Ok')]";
        return this.clickOkOnCookies(okButtonCookies);
    });

    this.When(/^I login into page with user "([^"]*)" and password "([^"]*)"$/, function(user, pass) {
        this.driver.findElement(xpath("//div[contains(text(), 'Log ind')]")).click();
        this.driver.findElement(xpath("//div/div/input[@type='email' and @class='rmq-7db35a36']")).sendKeys(user);
        this.driver.findElement(xpath("//div/div/input[@type='password' and @class='rmq-7db35a36']")).sendKeys(pass);
        this.driver.findElement(xpath("//div/button")).click();
    });

    this.Then(/^I should see the front page with "([^"]*)" tab$/, function(text) {
        var xpath = "//*[contains(text(),'" + text + "')]";
        var condition = until.elementLocated({
            xpath: xpath
        });
        return this.driver.wait(condition, 10000);
    });
};