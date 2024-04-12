let webdriver = require("selenium-webdriver");
require("chromedriver");

let seleniumBuilder = new webdriver.Builder();
let browserTab = seleniumBuilder.forBrowser("chrome").build();

let browserWindow = browserTab.get("https://practicetestautomation.com/practice-test-login/");

var logInfo = {
    "user": "student",
    "pass": "Password123"
}

let userInput = browserTab.findElement(webdriver.By.id("username"));
let sendUser = userInput.sendKeys(logInfo.user);

let passInput = browserTab.findElement(webdriver.By.id("password"));
let sendPass = passInput.sendKeys(logInfo.pass);

let subButton = browserTab.findElement(webdriver.By.id("submit"));
subButton.click();

let blogButton = browserTab.findElement(webdriver.By.xpath("//ul[@id='menu-primary-items']/li[4]/a"));
blogButton.click();
