//Assignment 4 - Fixtures 
const { test, expect } = require('../../fixtures/loginFixture');
const { InventoryPage } = require('../../pages/InventoryPage');

test('Verify inventory page elements and products', async ({ loggedInPage }) => {
    const inventoryPage = new InventoryPage(loggedInPage);

    // Step 1: Session & Routing Checks
    await expect(loggedInPage).toHaveTitle('Swag Labs');
    await expect(loggedInPage).toHaveURL(/inventory/);

    // Step 2: Core Element Visibility
    await expect(inventoryPage.logo).toBeVisible();
    await expect(inventoryPage.inventoryContainer).toBeVisible();

    // Step 3: Capacity Calculation & Assertions
    const productCount =await inventoryPage.getProductCount();

    console.log(`Number of products loaded: ${productCount}`);
    expect(productCount).toBeGreaterThanOrEqual(6);
});

