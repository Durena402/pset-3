const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;
const quarter = 0.25;
const dime = 0.10;
const nickel = 0.05;
const penny = 0.01;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("\nInvalid\n")
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid\n")
} else {
    
}

console.log ("\n" + quartersTotal + " quarters, " + dimeTotal + " dimes,\n");
