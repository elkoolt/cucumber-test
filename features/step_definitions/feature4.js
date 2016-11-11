var seleniumWebdriver = require('selenium-webdriver');
var assert = require('assert');
until = seleniumWebdriver.until;
xpath = seleniumWebdriver.By.xpath;

module.exports = function() {

    this.Given(/^I surf to "([^"]*)"$/, function(url) {
        this.driver.get(url);
        var okButtonCookies = "//button[contains(., 'Ok')]";
        return this.clickOkOnCookies(okButtonCookies);
    });

    this.When(/^I seek for homes in "([^"]*)"$/, function(city) {
        this.driver.findElement(xpath("//input[@id='locations-autosuggest' and @placeholder='Hvor vil du bo...?']")).sendKeys(city);

        var button = "//div[@id='mainContent']/div/div/div/div/div[2]/span/div/div/div[5]/div[contains(., 'Søg')]";
        var condition = until.elementLocated({
            xpath: button
        });
        this.driver.wait(condition, 5000);

        this.driver.findElement(xpath(button)).click();

        return this.driver.wait(until.titleIs('Find boliger til salg i Danmark | Sunday'), 10000);
    });

    this.Then(/^I click on first result I should be able to see pictures and other economy data$/, function() {
        this.driver.findElement(xpath("(//div[contains(@data-reactid, 'Home_List_')])[2]")).click();

        var imgXpath = "//div[@id='mainContent']/div/div/div/div/div/div/div/div/div/div/a/img";
        var condition = until.elementLocated({
            xpath: imgXpath
        });
        this.driver.wait(condition, 5000);

        var textLabel = "Månedlig økonomi i denne bolig";

        return this.driver.findElement(xpath("//div[@id='HomeBudgetEconomy']/div/div/div/div/div[1]")).getText().then(function(text) {
            assert.equal(text, textLabel);
        });
    });
};