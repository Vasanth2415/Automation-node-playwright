// Assignment 1- Page Object Model implementation[POM]
class CartPage {
// Initializes the CartPage class with the Playwright page object.
    constructor(page) {
        this.page = page;

        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
        this.cartItems = page.locator('.cart_item');
        this.checkoutButton = page.locator('#checkout');
    }

    // Navigates to the cart page by clicking the shopping cart link.
    async openCart() {
        await this.cartLink.click();
    }

  // Initiates the checkout process by clicking the checkout button.
    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}

module.exports = { CartPage };

