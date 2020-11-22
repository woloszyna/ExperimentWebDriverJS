var webdriver = require('selenium-webdriver');
var BasePage = require('../base/base');
var By = webdriver.By;

var today = new Date();
var date = today.getFullYear()+''+(today.getMonth()+1)+''+today.getDate();
var time = today.getHours() + '' + today.getMinutes() + '' + today.getSeconds();
var dateTime = date+''+time;

class regPage extends BasePage{

    provideDetailsForAccount() {
        driver.findElement(By.css('#firstname')).sendKeys('Tester');
        driver.findElement(By.css('#middlename')).sendKeys('Mc');
        driver.findElement(By.css('#lastname')).sendKeys('Test');
        driver.findElement(By.css('#email_address')).sendKeys(dateTime+'@email.com');
        driver.findElement(By.css('#password')).sendKeys(dateTime);
        driver.findElement(By.css('#confirmation')).sendKeys(dateTime);
    };

    createAccount() {
        driver.findElement(By.css('form#form-validate span > span')).click();
        return require('../pages/myDashboardPage');
    }


};
module.exports = new regPage();