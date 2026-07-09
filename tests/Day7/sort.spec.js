//Assignment 4- Fixtures

const { test, expect } = require('../../fixtures/LoginFixture');
const { InventoryPage } = require('../../pages/InventoryPage');
const { CartPage } = require('../../pages/CartPage');

// Verify Numerical/Alphabetical Product Sorting Profiles and Multi-Item Cart Additions

test('Sort products and verify cart items', async ({ loggedInPage }) => {
    const inventoryPage = new InventoryPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);

    // Phase 1: Price Sorting Verification (Low -> High) 
    await inventoryPage.sortProducts('lohi');
    const prices = await inventoryPage.getPrices();
    const sortedPrices = [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(sortedPrices);
    console.log('Products sorted correctly by Price Low -> High');

    // Phase 2: Alphabetical Sorting Verification (Name A -> Z) 
    await inventoryPage.sortProducts('az');
    const productNames = await inventoryPage.getProductNames();
    const sortedNames = [...productNames].sort();

    expect(productNames).toEqual(sortedNames);
    console.log('Products sorted correctly by Name A -> Z');

    // Phase 3: Multi-Item Additions
    await inventoryPage.addProduct(0);
    await inventoryPage.addProduct(1);
    await expect(cartPage.cartBadge).toHaveText('2');

    // Phase 4: Basket Content Inspection
    await cartPage.openCart();
    await expect(cartPage.cartItems).toHaveCount(2);
    console.log('2 products successfully added to cart');
});

