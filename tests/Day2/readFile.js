// Assignment 5 - File Handling

const fs = require('fs');

// Read the JSON file synchronously
const data = fs.readFileSync('D:/Automation-node-playwright/Day2/productList.json', 'utf8');
const products = JSON.parse(data);

// Display the product list
products.forEach(product => {
    console.log(`ID:${product.id} - Name:${product.name} - price:$${product.price}`);
});