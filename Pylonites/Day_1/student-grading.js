let studentName = "Lex Benedict";
let studentCourse = "BSCS";
let studentSubject = "Calculus";

let prelimGrade = 75;
let midtermGrade = 75;
let finalsGrade = 75;
let averageGrade = (prelimGrade + midtermGrade + finalsGrade) / 3;
// console.log(averageGrade);

let passingGrade = 75;
let isPassed = averageGrade <= passingGrade;

console.log(
  `Student Name: ${studentName}, Course: ${studentCourse}, Subject: ${studentSubject}`
);
console.log(
  `Prelim: ${prelimGrade}, Midterm: ${midtermGrade}, Finals: ${finalsGrade}`
);
console.log(`Average Grade: ${averageGrade}`);
console.log("Remarks: " + (isPassed ? "Passed" : "Failed"));

if (!isPassed) {
  console.log(`Remarks: Failed`);
} else {
  console.log("Remarks: Passed");
}
