const readlineSync = require("readline-sync");

const Min = 0;
const Max = Number.MAX_SAfE_INTEGER;

const year = Number(readlineSync.question("\nEnter a year: "));

if ((Number.isNaN(year)) || (year < Min || year > Max)) {
  console.log("\nInvalid.\n")
} else if  ((year % 4 === 0) || ((year & 100 === 0) && (year % 400 === 0))){
  console.log("\n"+ year + " is a leap year.\n");
} else {
  console.log("\n"+ year + " is not a leap year.\n");
}
