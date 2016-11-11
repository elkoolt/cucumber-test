var seleniumWebdriver = require('selenium-webdriver');
until = seleniumWebdriver.until;
xpath = seleniumWebdriver.By.xpath;

module.exports = function() {

    this.Given(/^I go to "([^"]*)"$/, function(url) {
        this.driver.get(url);
        var okButtonCookies = "//button[contains(., 'Ok')]";
        return this.clickOkOnCookies(okButtonCookies);
    });

    this.When(/^I create a new profile$/, function() {
        var newUserCreationBtn = "//div[contains(text(), 'Tilmeld')]";
        var name = "//input[@placeholder='Navn']"
        var email = "//input[@placeholder='Email']"
        var pass = "//input[@placeholder='Adgangskode']"
        var acceptCheckbox = "//label[@for='accept_terms']/div"
        var okButton = "//button[contains(., 'Opret profil')]";
        var randNumber = Math.floor((Math.random() * 10000000) + 1);

        this.driver.findElement(xpath(newUserCreationBtn)).click();
        this.driver.findElement(xpath(name)).sendKeys(randNumber);
        this.driver.findElement(xpath(email)).sendKeys(randNumber + "@gmail.com");
        this.driver.findElement(xpath(pass)).sendKeys(randNumber);
        this.driver.findElement(xpath(acceptCheckbox)).click();
        this.driver.findElement(xpath(okButton)).click();
    });

    this.Then(/^I should see "([^"]*)" tab in the top-right corner$/, function(text) {
        var xpath = "//*[contains(text(),'" + text + "')]";
        var condition = until.elementLocated({
            xpath: xpath
        });
        return this.driver.wait(condition, 10000);
    });
};