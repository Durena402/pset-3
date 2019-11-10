const readlineSync = require("readline-sync");

const Min = Number.MIN_SAFE_INTEGER;
const Max = Number.MAX_SAfE_INTEGER;

const int1 = Number(readlineSync.question("\nEnter three numbers.\n\n"));
const int2 = Number(readlineSync.question(""));
const int3 = Number(readlineSync.question(""));
const input = int1 || int2 || int3;

if ((int1 < int2) && (int2 < int3)) {
  console.log("\nStrictly increasing.\n");
} else if ((int1 == int2) && (int2 == int3)) {
  console.log("\nEqual.\n");
} else if ((int1 <= int2) && (int2 <= int3)){
  console.log("\nIncreasing.\n");
}  else if ((int1 > int2) && (int2 > int3)) {
  console.log("\nStrictly decreasing.\n");
} else if ((int1 >= int2) && (int2 >= int3)) {
  console.log("\nDecreasing.\n");
} else if ( (Number.isNaN(input)) || (input < Min || input > Max) ){
  console.log("\nInvalid\n")
} else {
  console.log("\nUnordered.\n")
}
