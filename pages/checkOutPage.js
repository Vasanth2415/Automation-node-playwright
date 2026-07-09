// Assignment 1- Page Object Model implementation[POM]
class CheckoutPage {
// Initializes the CheckoutPage class with the Playwright page object.
    constructor(page) {
        this.page = page;

        // Form Details
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');

        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');

        // Form Verification
        this.pageTitle = page.locator('.title');
        this.completeHeader = page.locator('.complete-header');
        this.completeText = page.locator('.complete-text');
    }

    // Fills out the checkout information form with user details.
    async enterCheckoutDetails(first, last, zip) {
        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.postalCode.fill(zip);
    }

    // Clicks the continue button to navigate to the next checkout step.
    async continueCheckout() {
        await this.continueButton.click();
    }

    // Clicks the finish button to confirm and place the order.
    async finishOrder() {
        await this.finishButton.click();
    }
}

module.exports = { CheckoutPage };

