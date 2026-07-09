//Assignment 4 - Fixtures 
const { test, expect } = require('../../fixtures/LoginFixture');
const { InventoryPage } = require('../../pages/InventoryPage');
const { CartPage } = require('../../pages/CartPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');
const checkoutData = require('../../testData/checkoutData.json');

// Authenticated User Completes Order Placement Flow
test('Add product, checkout and validate order success', async ({ loggedInPage }) => {
    const inventoryPage = new InventoryPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);
    const checkoutPage = new CheckoutPage(loggedInPage);

    // Step 1: Add Product to cart
    await inventoryPage.addFirstProductToCart();
    await expect(cartPage.cartBadge).toHaveText('1');

      // Step 2: Cart Navigation & Validation
    await cartPage.openCart();
    await expect(cartPage.cartItems).toHaveCount(1);
    await cartPage.proceedToCheckout();

    // Step 3: Checkout Information
    await checkoutPage.enterCheckoutDetails(
        checkoutData.firstName,
        checkoutData.lastName,
        checkoutData.postalCode
    );
    await checkoutPage.continueCheckout();
    await expect(checkoutPage.pageTitle).toHaveText('Checkout: Overview');

     // Step 4: Finalize Order 
    await checkoutPage.finishOrder();

    // Step 5: Order Confirmation Assertions
    await expect(checkoutPage.pageTitle).toHaveText('Checkout: Complete!');
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
    await expect(checkoutPage.completeText).toContainText('Your order has been dispatched');

    console.log('Order placed successfully');
});

