// Final Project - Complete Application flow

// importing necessary modules
import { login } from './login.js';
import { products } from './productList.js';
import { addToCart, viewCart, cart } from './cart.js';
import { checkout } from './checkOut.js';

// Simulating the complete app flow
try {
    console.log(login('vasantha', '12345'));
    console.log('Product List:');
    
    products.forEach(product => {
        console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`);
    });

    addToCart(products[0]);
    addToCart(products[1]);

    viewCart();

    checkout(cart);

} catch (error) {
    console.log(error.message);
}

