// Assignment Code
var generateBtn = document.querySelector("#generate"); //looks at id generate in html

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
//looks at id generate in html
var pwLength = prompt(
  "Creates Password between 8 and 128 characters\nChoose the number of characters"
);
while (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
  pwLength = prompt(
    "Length must be numbers between 8- 128 characters. \nHow many characters would you like your password to be?"
  );
}
console.log("PW length given " + pwLength);

/*****************************************************
 * Prompt for citera of password 
 * use of confirm reduces user entering incpatable answers, 
 * reducing usage of prompt (reduces number of events)  ****/
var upperCase = confirm("Include Upper Case Letters?");
var lowerCase = confirm("Include Lower Case Letters?");
var numberCase = confirm("Include Numbers Case Letters?");
var symbolCase = confirm("Include Symbols Case Letters?");

while (!(upperCase ||lowerCase ||numberCase ||symbolCase )){
  alert("Invalid Response\nYou must accept one form of character to generate password");
  var upperCase = confirm("Include Upper Case Letters?");
  var lowerCase = confirm("Include Lower Case Letters?");
  var numberCase = confirm("Include Numbers Case Letters?");
  var symbolCase = confirm("Include Symbols Case Letters?");
}
//Breadcrumb
console.log("Status of choice: Upper= "+upperCase +"  Lower= "+lowerCase +"  Number= "+numberCase +" Symbol= "+symbolCase);

const choiceNumber = upperCase +lowerCase +numberCase +symbolCase;
console.log("Choice count: ", choiceNumber);

const choiceArr=[{upperCase},{lowerCase},{numberCase},{symbolCase}];



/****************************************************
 *Works from here up
 * 
********************/
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword(upperCase,lowerCase,numberCase,symbolCase,pwLength);
  var passwordText = document.querySelector("#password");

   passwordText.value = password;
}

/*const result = document.getElementById("password");
document.getElementById('generate').addEventListener("click", fucntion(){
  result = generatePassword(upperCase,lowerCase,numberCase,symbolCase,pwLength);
});

const randomBasket = { 
  upper: getRandomUpper,
  lower: getRandomLower,
  number:getRandomNumber,
  symbol: getRandomSymbol,
}
console.log("looking to see where I call off the cliff");

function generatePassword(upper, lower, number, symbol,choiceNumber, pwLength){
  let generatedPassword = "";
  const choiceArr = [{upper},{lower},{number},{symbol}].filter((item) => Object.values(item[0]));

 
 

}

  
  filter((item) =>Object.value(item)[0]);//removes !true from all
   


 Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

 Add event listener to generate button
generateBtn.addEventListener("click", writePassword);*/