const readlineSync = require("readline-sync");

const temperature = Number(readlineSync.question("\nEnter a temperature: "));
let scale = String(readlineSync.question("Enter a scale: "));
scale = scale.toLowerCase();

const fPointFahrenheit = 32;
const bPointFahrenheit = 212;
const fPointCelsius = 0;
const bPointCelsius = 100;
const fPointKelvin = 273.2;
const bPointKelvin = 373.15;

if((temperature < Number.MIN_SAFE_INTEGER) || (temperature > Number.MAX_SAFE_INTEGER) || (Number.isNaN(temperature))) {
    console.log("\nInvalid\n");
} else if((scale == "f") && (temperature <= fPointFahrenheit)){
  console.log("\nSolid.\n");
} else if((scale == "f") && (fPointFahrenheit < temperature) && (temperature < bPointFahrenheit)){
  console.log("\nLiquid.\n");
}  else if((scale == "f") && (temperature >= bPointFahrenheit)){
  console.log("\nGas.\n");
} else if((scale == "c") && (temperature <= fPointCelsius)){
  console.log("\nSolid.\n");
} else if((scale == "c") && (temperature > fPointCelsius) && (temperature < bPointCelsius)){
  console.log("\nLiquid.\n");
} else if((scale == "c") && (temperature >= bPointCelsius)){
  console.log("\nGas.\n");
} else if((scale == "k") && (temperature <= fPointKelvin)){
  console.log("\nSolid.\n");
} else if((scale == "k") && (temperature > fPointKelvin) && (temperature < bPointKelvin)){
  console.log("\nLiquid.\n");
} else if((scale == "k") && (temperature >= bPointKelvin)){
  console.log("\nGas.\n");
} else {
  console.log("\nInvalid.\n");
}
