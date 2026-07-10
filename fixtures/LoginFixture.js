const base = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const loginData = require('../testData/loginData.json');

exports.test = base.test.extend({

    loggedInPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        // Perform the baseline login
        await loginPage.navigateToLoginPage();
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );

        // Hand over the authenticated page context to the executing test
        await use(page);
    }

});

exports.expect = base.expect;