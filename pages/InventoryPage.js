// Assignment 1- Page Object Model implementation[POM]
class InventoryPage {
    // Initializes the InventoryPage class with the Playwright page object.
    constructor(page) {
        this.page = page;

        // UI Elements
        this.pageTitle = page.locator('.title');
        this.logo = page.locator('.app_logo');
        this.inventoryContainer = page.locator('.inventory_container');
        this.products = page.locator('.inventory_item');

        // Interactive Elements list
        this.sortDropdown = page.locator('.product_sort_container');
        this.productPrices = page.locator('.inventory_item_price');
        this.productNames = page.locator('.inventory_item_name');
        this.addToCartButtons = page.locator('.btn_inventory');
    }

    // Actions & Verifications
    // Asserts or waits for the active browser URL to match the inventory endpoint pattern.
    async verifyInventoryPage() {
        await this.page.waitForURL(/inventory/);
    }

    // Computes the total quantity of displayed inventory item cards.
    async getProductCount() {
        return await this.products.count();
    }

    // Selects an item sorting filter profile using its value string.
    async sortProducts(option) {
        await this.sortDropdown.selectOption(option);
    }

    // Extracts and converts every visible text string price into a numerical floating value array.
    async getPrices() {
        const priceElements = await this.productPrices.allTextContents();
        return priceElements.map(price => parseFloat(price.replace('$', '')));
    }

    // Extracts all raw visible text elements matching item titles.
    async getProductNames() {
        return await this.productNames.allTextContents();
    }

    // Targets and clicks the very first available item button array index.
    async addFirstProductToCart() {
        await this.addToCartButtons.first().click();
    }

    // Targets and clicks a single item button
    async addProduct(index) {
        await this.addToCartButtons.nth(index).click();
    }
}

module.exports = { InventoryPage };