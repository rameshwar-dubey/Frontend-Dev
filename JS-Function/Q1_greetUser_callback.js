// Q1: greetUser with callback demonstration

function greetUser(name, callback) {
    console.log("Hello " + name);
    callback(); // Execute callback
}

function showEndMessage() {
    console.log("Welcome to the course!");
}

// Demonstration
greetUser("Rameshwar", showEndMessage);
/*
Flow:
1. greetUser() prints greeting.
2. callback() runs showEndMessage().
*/
