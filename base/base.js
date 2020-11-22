var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
var properties = require('../config/properties');

class BasePage {

    constructor() {
        globalThis.driver = driver;
    }

    navigateToLandingPage() {
        driver.get(properties.URL);
    }

    tearDown() {
        driver.quit();
    }


}
module.exports = BasePage;