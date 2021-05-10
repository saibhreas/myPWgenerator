//rewrite.js

/*Functions required to generate random Charachters based on UTF-8 
    (loaded in Head section of HTML)
    uses return Strig .fromCharCode and applies Math.floor & Math.random
:   Chosen to reduce calls for events.          *****
    Generators: random/lower, randomUpper randomNumber & randomSymbol */
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
} // 26 iterations of letters in aplahabet, starts at decimal 65 in chart
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
} // 26 iterations of letters in aplahabet, starts at decimal 97 in chart
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
} // 10 (0 to 9), starts at decimal 48 in chart
function getRandomSymbol() {
  const symbol = "~!@#$%^&*()_+<>?="; //creates inflexable variable with the string
  return symbol[Math.floor(Math.random() * symbol.length)];
} //uses string.lenght to increment thru const symbol
//First validation Breadcrumb
console.log(
  "Upper: " +
    getRandomUpper() +
    ", Lower: " +
    getRandomLower() +
    ", Number: " +
    getRandomNumber() +
    ", Symbol: " +
    getRandomSymbol()
);

/******************************************************
/*Initiate prompts to aquire criteria*/
var generateBtn = document.querySelector("#generate"); //looks at id generate in html
var pwLength = prompt(
  "Creates Password between 8 & 128\nChoose password length"
);
while (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
  pwlength = prompt(
    "Length mest be decimal numbers between 8 & 128\nChoose password  valid length"
  );
}
//Breadcrumb
console.log("pwLegnth given: " + pwLength);
