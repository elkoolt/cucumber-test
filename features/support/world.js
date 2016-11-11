var seleniumWebdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var chromeDriverPath = require('chromedriver').path;
chrome.setDefaultService(new chrome.ServiceBuilder(chromeDriverPath).build());
xpath = seleniumWebdriver.By.xpath;

function CustomWorld() {
    this.driver = new seleniumWebdriver.Builder()
        .withCapabilities(seleniumWebdriver.Capabilities.chrome())
        .build();

    // workaround for non-clickable/accessible elements - acceping cookies policy
    this.clickOkOnCookies = function(customXpath) {
        var condition = until.elementLocated({xpath: customXpath});
        this.driver.wait(condition, 10000);
        this.driver.findElement(xpath(customXpath)).click();
    };

}

module.exports = function() {
    this.World = CustomWorld;
    this.setDefaultTimeout(60 * 1000);
};