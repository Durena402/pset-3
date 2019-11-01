const readlineSync = require("readline-sync");

const  Min = Number.MIN_SAFE_INTEGER;
const Max = Number.MAX_SAfE_INTEGER;
const integer = Number(readlineSync.question("\nEnter an integer: "));
 if (integer % 2 == 0) {
   console.log("\nEven.");
} else if (integer % 2 == 1) {
    console.log("\nOdd.");
} else {
  console.log("\nInvalid");
}
