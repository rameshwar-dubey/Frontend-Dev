// Q9: Rewrite Person → Student using ES6 classes

class Person {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log("Name:", this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // calls Person constructor
        this.branch = branch;
    }
    showBranch() {
        console.log("Branch:", this.branch);
    }
}

const st = new Student("Rameshwar", "IT");
st.showName();
st.showBranch();

/*
Both ES6 class and prototype versions behave the same,
because classes internally use prototype mechanism.
*/
