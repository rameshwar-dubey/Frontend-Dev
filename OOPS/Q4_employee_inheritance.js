// Q4 – Employee Inheritance & Polymorphism

class Employee {
  constructor(name, department){
    this.name = name;
    this.department = department;
  }

  work(){
    console.log(`${this.name} works in ${this.department}`);
  }
}

class Manager extends Employee {
  work(){
    console.log(`${this.name} manages team in ${this.department}`);
  }
}

// Polymorphism test
const e = new Employee("Rohan","Sales");
const m = new Manager("Priya","HR");

e.work();
m.work();
