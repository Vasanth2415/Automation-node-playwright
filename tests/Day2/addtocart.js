// Assignment - 4 - Add to Cart Functionality

class Cart {
    constructor() {
        this.items = [];
    }

    // Method to add an item to the cart
    addItem(product) {
        this.items.push(product);
        console.log(`${product.name} added to cart`);
    }

    // Method to remove an item from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        console.log(`Product ${productId} removed from the cart`);
    }
    
    // Method to view the items in the cart
    viewCart() {
        console.log('Items in the Cart');
        console.log(this.items);
    }
}

// Example usage of the Cart class
const cart = new Cart();

let product1 = { id: 1, name: "Laptop", price: 34000 };
let product2 = { id: 2, name: "Mobile", price: 45000 };
let product3 = { id: 3, name: "Tablet", price: 25000 };

cart.addItem(product1);
cart.addItem(product2);

cart.viewCart();

cart.removeItem(2);

cart.viewCart();