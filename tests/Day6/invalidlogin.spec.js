//Assignment 2- POM Implementation

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { InventoryPage } = require('../../pages/InventoryPage');

// Test Configuration Data 
const loginData = require('../../testData/loginData.json');

test.describe('SauceDemo Login Tests', () => {
    // Negative Test Case: Asserts system fallback behavior when processing a bad credential pair.
    test('Invalid Login - Validate Error Message', async ({ page }) => {

        // POM Initialization
        const loginPage = new LoginPage(page);

        // Step 1: Request Navigation 
        await loginPage.navigateToLoginPage();

        // Step 2: Form Submission 
        // Populates fields utilizing tracking records derived from the invalid user JSON node
        await loginPage.login(
            loginData.invalidUser.username,
            loginData.invalidUser.password
        );

        // Step 3: Assertion Engine Hub
        // Confirm that the application error container DOM element pops up as visible
        await expect(loginPage.errorMessage).toBeVisible();

        // Confirm the text value inside the error wrapper strictly reflects the failure reason
        await expect(loginPage.errorMessage).toContainText('Username and password do not match');
        
        // Step 4: Runtime Diagnostics
        console.log(
            'Error Message:',await loginPage.getErrorMessage());
    });

});

