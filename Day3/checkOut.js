export function checkout(cart) {
    // reduce calculates the total sum starting from 0
    let total = cart.reduce((sum, product) => sum + product.price, 0);

    console.log("Checkout Successful");
    console.log("Total Amount: " + total);
}