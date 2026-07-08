// Assignment 5 - Functions
const inputUsername = 'vasantha';
const inputPassword = '12345';
// Function to check login credentials
function login(username, password) {
    if (username === inputUsername && password === inputPassword) {
        console.log('Login successful');
    } else {
        console.log('Invalid username or password');
    }
}

login('vasantha', '12345');
login('Ram', '12345');
login('vasantha', '098767');
