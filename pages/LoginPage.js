//Assignment 1- Page Object Model implementation[POM]
class LoginPage {
    // Initializes the LoginPage class with the Playwright page object.
    constructor(page) {
        this.page = page;

        // Credential
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');

        // Notifications
        this.errorMessage = page.locator('[data-test="error"]');
    }

    // Standard page navigation targeting the application.
    async navigateToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    // Complete user authorization via input manipulation and form submission.
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    // Extract the Error Message
    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }

    // Get the Placeholder Message for Username Field
    async getUsernamePlaceholder() {
        return await this.usernameInput.getAttribute('placeholder');
    }

    // Get the Placeholder Message for Password Field
    async getPasswordPlaceholder() {
        return await this.passwordInput.getAttribute('placeholder');
    }

    // Get the Login Button Text
    async getLoginButtonText() {
        return await this.loginButton.getAttribute('value');
    }
}

module.exports = { LoginPage };

