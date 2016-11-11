var seleniumWebdriver = require('selenium-webdriver');
var assert = require('assert');
until = seleniumWebdriver.until;
xpath = seleniumWebdriver.By.xpath;

module.exports = function() {

    this.Given(/^I navigate to "([^"]*)"$/, function(url) {
        this.driver.get(url);
        var okButtonCookies = "//button[contains(., 'Ok')]";
        return this.clickOkOnCookies(okButtonCookies);
    });

    this.When(/^I search for homes in "([^"]*)"$/, function(city) {
        this.driver.findElement(xpath("//input[@id='locations-autosuggest' and @placeholder='Hvor vil du bo...?']")).sendKeys(city);
        var button = "//div[@id='mainContent']/div/div/div/div/div[2]/span/div/div/div[5]/div[contains(., 'Søg')]";
        var condition = until.elementLocated({
            xpath: button
        });
        this.driver.wait(condition, 5000);
        this.driver.findElement(xpath(button)).click();
        return this.driver.wait(until.titleIs('Find boliger til salg i Danmark | Sunday'), 10000);
    });

    this.Then(/^I should see returned more than 0 results, in Danish - "([^"]*)"$/, function(text) {
        var searchResults = "//div[contains(@style, 'float:right;margin-right:12px;color:#666666;font-size:14px;font-family:hurme-regular, Helvetica, sans-serif;')]";

        this.driver.wait(until.elementLocated({
            xpath: searchResults
        }), 10000).then(function(searchResults) {
            assert.notEqual(text, searchResults);
        });
        return text;
    });
};