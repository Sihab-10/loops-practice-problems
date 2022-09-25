// 75.25, 65, 80 , 35.45, 99.50
// Mathematics, Biology, Chemistry, Physics, Bangla
var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.5;

var totalMarks =
  mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
console.log("total mark of all subject is:", totalMarks);
var average = totalMarks / 5;
var averageTwoDecimal = average.toFixed(2);
console.log("Average of all subject is: ", average);
console.log(
  "Average of all subject is for two decimal point is : ",
  averageTwoDecimal
);
