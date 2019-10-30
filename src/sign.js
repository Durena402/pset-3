const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("\nEnter a number: "));

if (Number.isNaN(number)&&(number < Number.MIN_SAFE_INTEGER || number > Number.MAX_SAfE_INTEGER)) {
    console.log("\nInvalid.");
} else if (number == 0) {
    console.log("\nZero.");
} else if (number < 0){
    console.log("\n Negative.");
} else if (number > 0) {
    console.log("\nPositive.");
}
