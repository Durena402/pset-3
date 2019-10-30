const readlineSync = require("readline-sync");

const integer = Number(readlineSync.question("\n Enter an integer: "));
if (Number.isNaN(integer)&&(integer < Number.MIN_SAFE_INTEGER || integer > Number.MAX_SAfE_INTEGER)) {
    console.log("\nInvalid.");
} else if (integer % 2 == 0) {
   console.log("\nEven.");
} else {
    console.log("\nOdd.");
}
//FIGURE HOW TO EXCLUDE DECIMALCOMPONENTS
