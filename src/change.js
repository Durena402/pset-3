const readlineSync = require("readline-sync");

const Min = 0.01;
const Max = 0.99;

const Q = 25;
const D = 10;
const N = 5;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("\nInvalid\n");
} else if (amount < Min|| amount > Max) {
    console.log("\nInvalid\n");
} else {
  let pennies = Math.round(amount * 100);

  const quarters = Math.floor( pennies / Q );
  pennies = pennies % 25;

  const dimes = Math.floor( pennies / D );
  pennies = pennies % 10;

  const nickels = Math.floor( pennies / N );
  pennies = pennies % 5;
console.log ("\n" + quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, and " + pennies +" pennies.\n");
}
