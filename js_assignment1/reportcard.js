let marks = [78, 85, 91, 88, 80]; 
let detained = marks.some(mark => mark < 35);
let total = 0;
for (let i = 0; i < marks.length; i++) {
  total += marks[i];
}
let average = total / marks.length;
let percentage = average;
let result;
if (detained) {
  result = "Detained";
} 
else if (percentage >= 85) {
  result = "Promoted with Distinction";
} 
else if (percentage >= 50 && percentage < 85) {
  result = "Promoted";
} 
else {
  result = "Detained (Below 50%)";
}
console.log(`Marks: ${marks.join(", ")}`);
console.log(`Total: ${total}`);
console.log(`Average / Percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
