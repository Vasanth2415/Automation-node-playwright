//Assignment 2 - POM Implementation

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

//Validates form controls and logs design attribute placeholders.
test('Print placeholders from SauceDemo login page', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Step 1: Open Target Endpoint
    await loginPage.navigateToLoginPage();

    // Step 2: Form Element Visibility Assertions
    // Ensure vital credentials fields and submit buttons are completely ready
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();

    // Step 3: Attribute Extractor Phase
    // Pull the active placeholder attributes and button values via the page model
    const usernamePlaceholder = await loginPage.getUsernamePlaceholder();
    const passwordPlaceholder = await loginPage.getPasswordPlaceholder();
    const loginButtonText = await loginPage.getLoginButtonText();
    
    // Step 4: Diagnostic Output Logs
    console.log('Username Placeholder:', usernamePlaceholder);
    console.log('Password Placeholder:', passwordPlaceholder);
    console.log('Login Button Text:', loginButtonText);
});

