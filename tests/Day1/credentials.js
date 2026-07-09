// Assignment 2 & 3 : Data Types & Operators - Conditions
const username = 'vasantha';
const password = '12345';
const inputUsername = 'vasantha';
const inputPassword = '12345';

// Check if the provided username and password match the expected values
if (username === inputUsername && password === inputPassword) {
    console.log('Login successful');
} else {
    console.log('Invalid username or password');
}

// Check for individual username mismatches
if (inputUsername !== username) {
    conslole.log('Invalid username');
}

// Check for individual password mismatches
if (inputPassword !== password) {
    console.log('Invalid password');
}