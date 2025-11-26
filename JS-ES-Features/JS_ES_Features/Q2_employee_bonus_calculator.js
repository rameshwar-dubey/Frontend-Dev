'use strict';
// Q2 - Employee Bonus Calculator
// Convert salary and years; compute bonus; strict mode prevents implicit globals.

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

(function computeBonuses(){
  console.log('--- Q2 Employee Bonus Calculator ---');
  for (let i = 0; i < employees.length; i++) {
    try {
      const emp = employees[i];
      if (!emp || !emp.name) throw new Error('Missing employee or name at index ' + i);

      const salary = Number(emp.salary);
      const years = Number(emp.years);
      if (Number.isNaN(salary)) throw new TypeError('Invalid salary for ' + emp.name);
      if (Number.isNaN(years)) throw new TypeError('Invalid years for ' + emp.name);

      const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
      console.log(`Employee: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus.toFixed(2)}`);
    } catch (err) {
      console.error('Error processing employee at index', i, '-', err.message);
    }
  }
  console.log('--- End Q2 ---\n');
})();