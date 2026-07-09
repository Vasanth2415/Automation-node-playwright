// Assignment 4 - Fixtures

const { test, expect } = require('../../fixtures/loginFixture');
const { InventoryPage } = require('../../pages/InventoryPage');
const { CartPage } = require('../../pages/CartPage');

// Validates text-based and numerical sorting matrices before executing multi-product cart additions.
// Verifies automated catalogue sorting states and shopping basket item additions.
test('Sort products and verify cart items', async ({ loggedInPage }) => {
    const inventoryPage = new InventoryPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);

    // Phase 1: Numerical Sort Verification (Price Low -> High)
    // Update the dropdown filter configuration to sort by ascending pricing structure
    await inventoryPage.sortProducts('lohi');

    const prices = await inventoryPage.getPrices();

    // Extract the active page values and generate a reference comparison array copy
    const sortedPrices = [...prices].sort((a, b) => a - b);

    // Deep compare the raw page state array output with our locally sorted mathematical rule array
    expect(prices).toEqual(sortedPrices);
    console.log('Products sorted correctly by Price Low -> High');

    // Phase 2: Alphabetical Sort Verification (Name A -> Z)
    // Reset the dropdown component selection option to alphabetical tracking profiles
    await inventoryPage.sortProducts('az');

    const productNames = await inventoryPage.getProductNames();
    const sortedNames = [...productNames].sort();

    expect(productNames).toEqual(sortedNames);
    console.log('Products sorted correctly by Name A -> Z');

    // Phase 3: Multiple Item Processing & Badge Increments
    // Inject multiple product objects dynamically into the session context
    await inventoryPage.addProduct(0);
    await inventoryPage.addProduct(1);

    // Assert the total cart unit count
    await expect(cartPage.cartBadge).toHaveText('2');
    
    // Phase 4: Open the Cart
    await cartPage.openCart();
    await expect(cartPage.cartItems).toHaveCount(2);

    console.log('2 products successfully added to cart');
});

