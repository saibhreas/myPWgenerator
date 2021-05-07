// Assignment Code


var specialChars=[ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\" ];


//
var numbArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0
];

//lower case Array

var lowerCase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
;
var upperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


var generateBtn = document.querySelector("#generate");


var yes = "y";
var no = "n";
var passwordLength = 0;
var choices = [];

// Write password to the #password input
function generatePassword(){
  while (parseInt (passwordLength) < 8 ||parseInt (passwordLength) >128){
    passwordLength= prompt("Please enter the length of the password you like");
    if (parseInt (passwordLength) < 8 ||parseInt (passwordLength) >128){
      passwordLength= prompt("Please enter password between 8 and 128");
    }
    else if (passwordLength== "" || Number.isNaN (parseInt (passwordLength))){
       passwordLength = prompt("Please enter a valid promt")
    }
  }

var CharChoice = prompt ("Would you like Special Characters.  Enter y for Yes and n for No");
  if (CharChoice === yes){ 
    CharChoice.push(specialChars);
  }
  else if (!no.includes(CharChoice) && !yes.includes(CharChoice)){
    alert("That is not a choice");
  }
}





function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}












// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
