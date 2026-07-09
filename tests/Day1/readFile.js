const fs = require('fs');

// Read the JSON file
fs.readFile('D:/Automation-node-playwright/Day1/productsList.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    // Convert the JSON string to a JavaScript object
    const products = JSON.parse(data);

    console.log("Products List:");
    
    // Loop through the products array and log each product's details
    products.forEach(product => {
        console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`);
    });

});