// Assignment 3 - importing the login function 

// Import the login function from the exportLogin.js file
import { login } from './exportLogin.js';

try {
    const result = login('vasantha', '12345');
    console.log(result);
}
catch (error) {
    console.log(error.message);
}