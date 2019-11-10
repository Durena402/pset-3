const readlineSync = require("readline-sync");

let input = String(readlineSync.question("\nEnter a month: "));
input = input.toLowerCase();
input = input.substring(0 , 3)

if ((input == "jan") || (input == "mar") || (input == "may") || (input == "aug") || (input == "oct") || (input == "dec")) {
  console.log("\n31 days.\n");
} else if ((input == "apr") || (input == "jun") || (input == "sep") || (input == "nov")) {
  console.log("\n30 days.\n")
} else if (input == "feb") {
  console.log("\n28 or 29 days.\n");
} else  {
  console.log("\nInvalid.\n")
}
