//Assignment 2 - POM Implementation
const { test, expect } = require('@playwright/test');
const { GooglePage } = require('../../pages/GooglePage');

// Google Homepage Navigation Validation
test('Open Google and verify page title', async ({ page }) => {
    const googlePage = new GooglePage(page);

    await googlePage.navigateToGoogle();
    await expect(page).toHaveTitle(/Google/);
});

