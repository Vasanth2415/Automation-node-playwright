// Assignment - 2 Error Handling using try/catch

function login(username, password) {
    const inputUsername = 'vasantha';
    const inputPassword = '12345';

    // Check if the provided username and password match the expected values
    if (username === inputUsername && password === inputPassword) {
        return 'Login succssful';
    } else {
        throw new error('Invalid username or password');
    }
}

// Example usage of the login function with error handling
try {
    const result = login('vasantha', '12345');
    console.log(result);
} catch (error) {
    console.log(error.message);
}