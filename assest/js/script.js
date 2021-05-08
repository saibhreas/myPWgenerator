window.addEventListener("load", function () {
  var pwlength = prompt(
    "Creates Password between 8 and 128 characters\n How many characters do"
  );
  while (pwlength < 8 || pwlength > 128) {
    pwlength = prompt(
      "Length must be 8-128 characters. How many     characters would you like your password to be?"
    );
  }
  console.log("this is the PW lenght given " + pwlength);

  var upperCase = confirm("Would you like to use uppercase letters?");
  var lowerCase = confirm("Would you like to use lowercase letters?");
  var number = confirm("would you like to use numbers?");
  var symbol = confirm("would you like to use special characters?");
  console.log("these were confirmed: " + "Uppercase " + upperCase + ", Lowercase "+ lowerCase + ", Numbers " +number + ", Symbols "+ symbol);


  while (!(upperCase || lowerCase || number || symbol)) {
    alert("You must select at least one character type!");

    upperCase = confirm("Would you like to use uppercase letters?");
    lowerCase = confirm("Would you like to use lowercase letters?");
    numbers = confirm("would you like to use numbers?");
    symbols = confirm("would you like to use special characters?");
  }

  //DOM elements
  const resultEl = document.getElementById("password");

  document.getElementById("generate").addEventListener("click", function() {
    resultEl.value = generatePassword(
      lowerCase,
      upperCase,
      number,
      symbol,
      pwlength
    );
  });

/*  document.getElementById("clipboard").addEventListener("click", function() {
    const textarea = document.createElement("textarea");
    const password = resultEl.value;

    if (!password) {
      return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    
    textarea.remove();
    alert("Password copied to clipboard");
  });
}); */

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [
    {
      lower,
    },
    {
      upper,
    },
    {
      number,
    },
    {
      symbol,
    },
  ].filter((item) => Object.values(item)[0]);

  // create a loop
  for (let i = 0; i < length; i++) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// Generator functions
function getRandomLower() {
  return String.fromCharcode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharcode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharcode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbol= "!@#$%^&*()_+<>?";
  return symbol[Math.floor(Math.random() *symbol.length)];
}
//check to see they work

console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());


