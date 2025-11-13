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