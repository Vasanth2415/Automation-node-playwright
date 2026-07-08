//Exporting the login function to be used in other files
export function login(username, password) {
    const inputUsername = 'vasantha';
    const inputPassword = '12345';

    // Check if the provided username and password match the expected values
    if (username === inputUsername && password === inputPassword) {
        return "Login successful";
    }
    else {
        console.log("Invalid username or password");
    }
}