// Assignment 3- Locators

const { test, expect } = require('@playwright/test');

test('Print placeholders from SauceDemo login page', async ({ page }) => {
   // Step 1: Open Target Endpoint 
    await page.goto('https://www.saucedemo.com/');

    // Step 2: Form Element Visibility Assertions
    const usernameField = page.getByPlaceholder('Username');
    const passwordField = page.getByPlaceholder('Password');
    const loginButton = page.locator('#login-button');

    await expect(usernameField).toBeVisible();
    await expect(passwordField).toBeVisible();
    await expect(loginButton).toBeVisible();

    // Step 3: Attribute Extractor Phase 
    const usernamePlaceholder = await usernameField.getAttribute('placeholder');
    const passwordPlaceholder = await passwordField.getAttribute('placeholder');
    const loginButtonText = await loginButton.getAttribute('value');

    console.log('Username Placeholder:', usernamePlaceholder);
    console.log('Password Placeholder:', passwordPlaceholder);
    console.log('Login Button Text:', loginButtonText);
});

