const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("\nInvalid\n");
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid\n");
} else {
  const quarters = Math.floor( amount / 0.25 );
  let change  = amount % 0.25;
  const dimes = Math.floor( change / 0.10 );
  change = change % 0.10;
  const nickels = Math.floor( change / 0.05 );
  change = change % 0.05;
  const pennies = Math.floor( change / 0.01 );
console.log ("\n" + quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, and " + pennies +" pennies.\n");
}
