// Assignment 1- Page Object Model implementation[POM]
class GooglePage {
// Initializes the GooglePage class with the Playwright page object.
    constructor(page) {
        this.page = page;
    }

    // Navigates the browser directly to the Google homepage.
    async navigateToGoogle() {
        await this.page.goto('https://www.google.com');
    }
}

module.exports = { GooglePage };

