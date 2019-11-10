const readlineSync = require("readline-sync");

const  Min = Number.MIN_SAFE_INTEGER;
const Max = Number.MAX_SAfE_INTEGER;

const integer = Number(readlineSync.question("\nEnter an integer: "));
 if (integer % 2 == 0) {
   console.log("\nEven.\n");
} else if (integer % 2 == 1) {
    console.log("\nOdd.\n");
} else {
  console.log("\nInvalid\n");
}
