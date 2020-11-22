var webdriver = require('selenium-webdriver');
var BasePage = require('../base/base');
var By = webdriver.By;

class LandingPage extends BasePage{

    accessRegPage() {
        driver.findElement(By.css('header#header div.skip-links > div > a > span.label')).click();
        driver.findElement(By.css('div#header-account li:nth-child(5) > a')).click();
        return require('./regPage.js');
}



};
module.exports = new LandingPage();