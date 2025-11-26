// Q1 – Student Result Processing (reduce + Classes)

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    const avg = this.marks.reduce((a,b)=>a+b,0) / this.marks.length;
    return avg;
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 90) return "A";
    if (avg >= 75) return "B";
    if (avg >= 60) return "C";
    return "F";
  }
}

// Test
const s1 = new Student("Ravi",[90,85,88]);
const s2 = new Student("Meera",[70,65,60]);
const s3 = new Student("Karan",[50,40,45]);

console.log(s1.name, s1.calculateAverage(), s1.getGrade());
console.log(s2.name, s2.calculateAverage(), s2.getGrade());
console.log(s3.name, s3.calculateAverage(), s3.getGrade());
