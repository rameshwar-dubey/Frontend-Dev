class Employee{
  constructor(id,name,department,salary){
    this.id=id; this.name=name; this.department=department; this.salary=salary;
  }
  getAnnualSalary(){ return this.salary*12; }
  applyBonus(percent){ this.salary += this.salary*percent/100; }
}
const employees=[
  new Employee(1,"A","HR",30000),
  new Employee(2,"B","Tech",40000),
  new Employee(3,"C","Tech",35000),
  new Employee(4,"D","Sales",28000),
  new Employee(5,"E","HR",26000)
];
const total=employees.reduce((sum,e)=> sum+e.getAnnualSalary(),0);
console.log(total);
