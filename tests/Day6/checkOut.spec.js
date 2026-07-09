// Assignment 4 - Fixtures 

const { test, expect } = require('../../fixtures/loginFixture');
const { InventoryPage } = require('../../pages/InventoryPage');
const { CartPage } = require('../../pages/CartPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');
const checkoutData = require('../../testData/checkoutData.json');

// End-to-End Test: Validates adding items, verifying counters, and completing checkout.
test('Add product, checkout and validate order success', async ({ loggedInPage }) => {

    // POM Initialization 
    // Instantiates each page object wrapper using the pre-authenticated page fixture context
    const inventoryPage = new InventoryPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);
    const checkoutPage = new CheckoutPage(loggedInPage);

    // Step 1: Inventory Management 
    await inventoryPage.addFirstProductToCart();

    // Verify the cart header icon increments its badge item count immediately
    await expect(cartPage.cartBadge).toHaveText('1');

    // Step 2: Shopping Cart Verification
    await cartPage.openCart();

    // Assert that exactly one operational item card exists in the active cart DOM tree
    await expect(cartPage.cartItems).toHaveCount(1);
    await cartPage.proceedToCheckout();

    // Step 3: Checkout Information Entry
    await checkoutPage.enterCheckoutDetails(
        checkoutData.firstName,
        checkoutData.lastName,
        checkoutData.postalCode
    );
    await checkoutPage.continueCheckout();

    // Validate the page transition state is safely resting on the intermediate order summary overview
    await expect(checkoutPage.pageTitle).toHaveText('Checkout: Overview');

    // Step 4: Finalization 
    await checkoutPage.finishOrder();

    // Assert confirmation screens reflect valid checkout page headers and titles
    await expect(checkoutPage.pageTitle).toHaveText('Checkout: Complete!');
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
    await expect(checkoutPage.completeText).toContainText('Your order has been dispatched');

    console.log('Order placed successfully');
});

