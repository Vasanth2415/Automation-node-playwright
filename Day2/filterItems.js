// Assignment 5 - Advance Array Operations Filter,Map,Reduce

// Declare an array of products with id, name, and price
let products = [
    { id: 1, name: 'Laptop', price: 55000 },
    { id: 2, name: 'Mobile', price: 15000 },
    { id: 3, name: 'Tablet', price: 30000 },
    { id: 4, name: 'Headphones', price: 1000 },
    { id: 5, name: 'Smartwatch', price: 2000 }
];

// Filter the products to get only those with a price less than 15000
let cheapProducts = products.filter(product => product.price < 15000);
console.log('Cheap Products: ', cheapProducts);

// Map the products to get an array of product names
let productNames = products.map(product => product.name);
console.log('Product Names: ', productNames);

// Reduce the products to get the total price of all products
let totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log('Total Price: ', totalPrice);