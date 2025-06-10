 
 
 const studentName = "Yaseen";
const totalMarks = 500;
let mathMarks = 85;
let englishMarks = 78;
let urduMarks = 90;
let physicsMarks = 82;
let chemistryMarks = 88;

let obtainedMarks = mathMarks + englishMarks + urduMarks + physicsMarks + chemistryMarks;
let percentage = (obtainedMarks / totalMarks) * 100;
let grade;

if (percentage >= 80) {
    grade = "A+";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
} else {
    grade = "Fail";
}

document.write(`
    <br>
<b>Mark Sheet:</b>
<br>
Student Name: ${studentName}
<br>
Math: ${mathMarks}
<br>
English: ${englishMarks}
<br>
Urdu: ${urduMarks}
<br>
Physics: ${physicsMarks}
<br>
Chemistry: ${chemistryMarks}
<br>
Total Marks: ${totalMarks}
<br>
Obtained Marks: ${obtainedMarks}
<br>
Percentage: ${percentage.toFixed(2)}%
<br>
Grade: ${grade}
`);