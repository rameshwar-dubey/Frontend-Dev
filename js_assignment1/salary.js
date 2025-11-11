let currentSalary = 40000;
let incrementRate = 10;
let salaryProjection = [];
for (let year = 1; year <= 5; year++) {
     currentSalary += (currentSalary * incrementRate) / 100;
      let roundedSalary = Math.round(currentSalary);
       salaryProjection.push({
    Year: year,
    "Projected Salary (₹)": roundedSalary
  });
}
console.log("5-Year Salary Projection (with 10% annual increment)");
console.table(salaryProjection);