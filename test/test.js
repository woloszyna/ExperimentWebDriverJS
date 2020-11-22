var webdriver = require('selenium-webdriver');
var landingPage = require('../pages/landingPage');

landingPage.navigateToLandingPage();
var regPage = landingPage.accessRegPage();
regPage.provideDetailsForAccount();
var myDashboard = regPage.createAccount();