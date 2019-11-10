const readlineSync = require("readline-sync");

const grade = readlineSync.question("\nEnter a grade: ");
const Min = 0;
const Max = 100;
const a = (90 <= grade) && (grade <=  Max);
const b = ((80 <= grade) && (grade <= 89));
const c = ((70 <= grade) && (grade <= 79));
const d = ((60 <= grade) && (grade <= 69));
const f = (Min <= grade) && (grade <= 59);

if (a){
  console.log("\nYou recieved an A.\n");
} else if (b) {
  console.log("\nYou recieved a B.\n");
} else if (c) {
  console.log("\nYou recieved a C.\n")
} else if (d) {
  console.log("\nYou recieved a D.\n");
} else if (f){
  console.log("\nYou recieved a F.\n");
} else {
  console.log("\nInvalid.\n");
}
