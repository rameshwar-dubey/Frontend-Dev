let temperature = 18; 
let isRaining = false; 
let windSpeed = 25; 
if (isRaining) {
  console.log("Stay indoors with hot coffee.");
} 
else if (temperature > 35 && !isRaining) {
  console.log("It's hot! Go swimming.");
} 
else if (temperature < 15 && windSpeed > 20) {
  console.log("Too cold and windy — stay home.");
} 
else if ((temperature >= 15 && temperature <= 35) && (windSpeed <= 20 || !isRaining)) {
  console.log("Perfect day for a walk.");
} 
else {
  console.log("Enjoy your day responsibly!");
}