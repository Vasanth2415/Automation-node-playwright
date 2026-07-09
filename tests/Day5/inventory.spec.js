// Assignment 1- Assertions Validation
const { test, expect } = require('@playwright/test');

test('Verify inventory page elements and products', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Step 1: Authentication & Login
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Step 2: Page Validations
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page).toHaveURL(/inventory/);

    // Step 3: Layout Visibility Checks 
    const logo = page.locator('.app_logo');
    await expect(logo).toBeVisible();

    const inventoryContainer = page.locator('.inventory_container');
    await expect(inventoryContainer).toBeVisible();

    // Step 4: Numerical Capacity Verification
    const products = page.locator('.inventory_item');
    const productCount = await products.count();

    console.log(`Number of products loaded: ${productCount}`);
    expect(productCount).toBeGreaterThanOrEqual(6);
});

