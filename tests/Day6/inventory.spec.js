//Assignment 4 - Fixtures 

const { test, expect } = require('../../fixtures/LoginFixture');
const { InventoryPage } = require('../../pages/InventoryPage');

// Verifies baseline landing page UI structures and minimal inventory count.
test('Verify inventory page elements and products', async ({ loggedInPage }) => {

    const inventoryPage = new InventoryPage(loggedInPage);

    // Step 1: 
    // Confirm the browser tab string strictly equals the expected title definition
    await expect(loggedInPage).toHaveTitle('Swag Labs');

    // Confirm the current system routing url includes the partial string segment path
    await expect(loggedInPage).toHaveURL(/inventory/);

    // Step 2:
    // Ensure the major brand logo and the primary products wrapper array grid are visible
    await expect(inventoryPage.logo).toBeVisible();
    await expect(inventoryPage.inventoryContainer).toBeVisible();

    // Step 3: Numerical Inventory Capacity Check
    const productCount = await inventoryPage.getProductCount();
    console.log(`Number of products loaded: ${productCount}`);

    // Validate that the system database populated at least six items on the active web grid
    expect(productCount).toBeGreaterThanOrEqual(6);
});

