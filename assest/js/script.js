//window.addEventListener("load", function () {
var generateBtn = document.querySelector("#generate");  
var plength = prompt(
    "Creates Password between 8 and 128 characters\n How many characters do"
  );
  while (isNaN(plength) || plength < 8 || plength > 128) {
    plength = prompt(
      "Length must be numbers between 8- 128 characters. \nHow many characters would you like your password to be?"
    );
  }
  console.log("this is the PW lenght given " + plength);

  var upperCase = confirm("Would you like to use uppercase letters?");
  var lowerCase = confirm("Would you like to use lowercase letters?");
  var number = confirm("would you like to use numbers?");
  var symbol = confirm("would you like to use special characters?");
  console.log("these were confirmed: " + "Uppercase " + upperCase + ", Lowercase "+ lowerCase + ", Numbers " +number + ", Symbols "+ symbol);


  while (!(upperCase || lowerCase || number || symbol)) {
    alert("You must select at least one character type!");

    upperCase = confirm("Would you like to use uppercase letters?");
    lowerCase = confirm("Would you like to use lowercase letters?");
    number = confirm("would you like to use numbers?");
    symbol = confirm("would you like to use special characters?");
  }

  //DOM elements
  const result = document.getElementById("password");

  document.getElementById("generate").addEventListener("click", () => {
    result = generatePassword(
      lowerCase,
      upperCase,
      number,
      symbol,
      plength
    );
  });

  /*document.getElementById("clipboard").addEventListener("click", function() {
    const textarea = document.createElement("textarea");
    const password = result;

    if (!password) {
      return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    
    textarea.remove();
    alert("Password copied to clipboard");
  });*/
//});

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
};

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  
  const typesArr = [{lower},{upper}, {number}, {symbol}
  ].filter((item) => Object.values(item)[0]);
  console.log("typesArr: ", typesArr);
  console.log("Breadcrumb");
  console.log(length);

  // create a loop
  for (let i = 0; i < length; i= typesCount) {
    typesArr.forEach((type) => {
      console.log(type);
      const funcName = Object.keys(type)[0];
      generatedPassword += randomfunc[funcName]();
      console.log(generatedPassword);
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
  console.log(finalPasswor);
 
}

console.log("breadcrumb");
// Generator functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbol= "!@#$%^&*()_+<>?";
  return symbol[Math.floor(Math.random() *symbol.length)];
}
//check to see they work

console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());


generateBtn.addEventListener("click", writePassword);