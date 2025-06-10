 var studentId = "ST12345"; // var for older style variable
const course = "Web Development"; // const for fixed value
let score = 95; // let for reassignable variable

score = 98; // let allows reassignment
// var allows reassignment too, but we won't change studentId
// const course can't be changed

document.write(`
    <br>
Variable Keywords Example:
<br>
Student ID (var): ${studentId}
<br>
Course (const): ${course}
<br>
Score (let): ${score}
`);