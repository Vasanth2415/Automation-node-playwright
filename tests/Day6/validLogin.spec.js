const { test, expect } = require('../../fixtures/LoginFixture');
const { InventoryPage } = require('../../pages/InventoryPage');

// verifying successful authentication flows and behaviors.
test.describe('SauceDemo Valid Login Tests', () => {
    // Asserts landing page layout and state after a valid credentials login.
    test('Valid Login - Verify Inventory Page', async ({ loggedInPage }) => {
        // POM Initialization
        const inventoryPage = new InventoryPage(loggedInPage);

        // Step 1: Endpoint Lifecycle Verification
        await inventoryPage.verifyInventoryPage();

        // Step 2: Redirection Assertions
        await expect(loggedInPage).toHaveURL(/inventory/);

        // Step 3: Structural Element Validation
        await expect(inventoryPage.pageTitle).toHaveText('Products');
    });

});