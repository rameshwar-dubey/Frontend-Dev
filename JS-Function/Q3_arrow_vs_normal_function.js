// Q3: Why this.name is undefined in arrow function

const user = {
    name: "Rameshwar",
    showName: () => {
        console.log(this.name); 
    }
};

// Arrow functions DO NOT bind their own 'this',
// so 'this' refers to global object → undefined
user.showName();

// FIX using normal function
const userFixed = {
    name: "Rameshwar",
    showName: function() {
        console.log(this.name);
    }
};

userFixed.showName();
