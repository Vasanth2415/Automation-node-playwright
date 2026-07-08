//exporting the cart array and functions to add and view items in the cart
export let cart = [];
//function to add an item to the cart
export function addToCart(product) {
    cart.push(product);
    console.log(`${product.name} added to cart`);
}
//function to view the items in the cart
export function viewCart() {
    console.log('Items in the Cart: ');
    console.log(cart);

}