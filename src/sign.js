const readlineSync = require("readline-sync");

const Min = Number.MIN_SAFE_INTEGER;
const Max = Number.MAX_SAfE_INTEGER;
const number = Number(readlineSync.question("\nEnter a number: "));

if (Number.isNaN(number) || (number < Min || number > Max)) {
    console.log("\nInvalid.\n");
} else if (number == 0) {
    console.log("\nZero.\n");
} else if (number < 0){
    console.log("\nNegative.\n");
} else if (number > 0) {
    console.log("\nPositive.\n");
}
