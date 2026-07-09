// Assignment 2 - POM Implementation

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { InventoryPage } = require('../../pages/InventoryPage');
const loginData = require('../../testData/loginData.json');

test.describe('SauceDemo Login Tests', () => {
    // Verify System Rejection and Error Feedback for Invalid Credentials
    test('Invalid Login - Validate Error Message', async ({ page }) => {
        const loginPage = new LoginPage(page);

        // Step 1: Navigation
        await loginPage.navigateToLoginPage();

        // Step 2: Form Submission
        await loginPage.login(
            loginData.invalidUser.username,
            loginData.invalidUser.password
        );

         // Step 3: Failure Assertions
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText('Username and password do not match');

        // Step 4: Runtime Diagnostics
        console.log('Error Message:',await loginPage.getErrorMessage());
    });

});

