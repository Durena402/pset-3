const readlineSync = require("readline-sync");

const answer = readlineSync.question("\nEnter a letter grade: ");
const grade = answer.toUpperCase();
switch (grade) {
  case "A+":
    console.log("\nYour GPA is 4.00.\n");
    break;
  case "A":
    console.log("\nYour GPA is 4.00.\n");
    break;
  case "A-":
    console.log("\nYour GPA is 3.67.\n");
    break;
  case "B+":
    console.log("\nYour GPA is 3.33.\n");
    break;
  case "B":
    console.log("\nYour GPA is 3.00.\n");
    break;
  case "B-":
    console.log("\nYour GPA is 2.67.\n");
    break;
  case "C+":
    console.log("\nYour GPA is 2.33.\n");
    break;
  case "C":
    console.log("\nYour GPA is 2.00.\n");
    break;
  case "C-":
    console.log("\nYour GPA is 1.67.\n");
    break;
  case "D+":
    console.log("\nYour GPA is 1.33.\n");
    break;
  case "D":
    console.log("\nYour GPA is 1.00.\n");
    break;
  case "D-":
    console.log("\nYour GPA is 0.67.\n");
    break;
  case "F":
    console.log("\nYour GPA is 0.00.\n");
    break;
  default:
    console.log("\nInvalid.\n");
    break;
}
