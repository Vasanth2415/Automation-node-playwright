const username = 'standard_user';
const password = 'secret_sauce';
const inputUsername = 'invalid_user';
const inputPassword = 'wrong_password';

// Authentication Assessment
if (username === inputUsername && password === inputPassword) {
    console.log('Login successful');
} else {
    console.log('Invalid credentials');
}

// Verify if the submitted user handle deviates from the system records
if (inputUsername !== username) {
    console.log("Username does not match");
}

// Verify if the submitted safety passcode deviates from the system records
if (inputPassword !== password) {
    console.log("Password does not match");
}