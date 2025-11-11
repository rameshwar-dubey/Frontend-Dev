let expenses = [12000, 3000, 15000, 4000, 2000]; 
let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i];
}
let average = total / expenses.length;
let tax = total * 0.10;
let finalAmount = total + tax;
total = total.toFixed(2);
average = average.toFixed(2);
finalAmount = finalAmount.toFixed(2);
console.log(`Total Expenses: ₹${total}`);
console.log(`Average : ₹${average}`);
console.log(`Final Amount (after 10% tax): ₹${finalAmount}`);