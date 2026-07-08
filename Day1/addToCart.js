let cart = [];

// Function to add an item to the cart
function addToCart(id, name, price) {
    cart.push({
        id: id,
        name: name,
        price: price,
    });
}

// Example usage of the addToCart function
addToCart(1, 'Dell Laptop', 50000);
addToCart(2, 'Samsung Mobile', 15000);
addToCart(3, 'Apple Tablet', 30000);

console.log('Cart Items: ', cart);