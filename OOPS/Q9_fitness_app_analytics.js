// Q9 – Fitness App Analytics

class FitnessAnalytics {
  constructor(data){
    if(!data || data.length === 0){
      throw new Error("Dataset cannot be empty");
    }
    this.data = data;
  }

  getActiveUsers(){
    return this.data.filter(u=>u.steps > 7000);
  }

  getAverageCalories(){
    return this.data.reduce((a,b)=>a+b.calories,0) / this.data.length;
  }

  getUserSummary(){
    return this.data.map(u=>`${u.user} walked ${u.steps} steps and burned ${u.calories} calories.`);
  }
}

// Test
const dataset = [
  {user:"A", steps:8000, calories:300},
  {user:"B", steps:12000, calories:500},
  {user:"C", steps:4000, calories:200}
];

const fa = new FitnessAnalytics(dataset);

console.log("Active users:", fa.getActiveUsers());
console.log("Avg calories:", fa.getAverageCalories());
console.log("Summary:", fa.getUserSummary());
