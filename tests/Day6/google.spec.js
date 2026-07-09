// Assignment 2 - POM Implementation

const { test, expect } = require('@playwright/test');
const { test, expect } = require('../../fixtures/LoginFixture');
const { GooglePage } = require('../../pages/GooglePage');

//Navigates to the Google home gateway and performs a baseline page title evaluation.
test('Open Google and verify page title', async ({ page }) => {
    // POM Initialization
    const googlePage = new GooglePage(page);

    // Step 1: Navigation
    await googlePage.navigateToGoogle();

    // Step 2: Verification - title check to confirm the page tab name matches system expectations
    await expect(page).toHaveTitle(/Google/);
});

