let userArray = ["Alice", "Bob", "Charlie"]; // initial users

function signup(userName) {
    if (userArray.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        userArray.push(userName);
        return "Signup Successful, Please Login";
    }
}
onsole.log(signup("Alice")); 
console.log(signup("David"));

const correctPassword = "Emp@123"; // fixed password

function login(userName, password) {
    if (!userArray.includes(userName)) {
        return "User Not Found, Please Signup";
    }
    if (password === correctPassword) {
        return "Login Successful...";
    } else {
        return "Wrong Password....";
    }
}

// Example test
console.log(login("Alice", "Emp@123"));    // Login Successful...
console.log(login("Bob", "wrongPass"));    // Wrong Password....
console.log(login("Zara", "Emp@123"));     // User Not Found, Please Signup
