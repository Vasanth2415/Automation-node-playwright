//Assignment 2 - POM Implementation
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

// Verify and print the Placeholder Messages
test('Print placeholders from SauceDemo login page', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Step 1: Navigation & Visibility Checks
    await loginPage.navigateToLoginPage();
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();

    // Step 2: Attribute Extraction
    const usernamePlaceholder =await loginPage.getUsernamePlaceholder();
    const passwordPlaceholder =await loginPage.getPasswordPlaceholder();
    const loginButtonText =await loginPage.getLoginButtonText();

    // Step 3: Print the Placeholder Message
    console.log('Username Placeholder:',usernamePlaceholder);
    console.log('Password Placeholder:',passwordPlaceholder);
    console.log('Login Button Text:',loginButtonText);
});

