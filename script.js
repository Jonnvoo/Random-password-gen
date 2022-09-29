// Assignment Code
var generateBtn = document.querySelector("#generate");
var length
var lowercase
var uppercase
var numbers
var specialCharacters

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


}

function generatePassword() {
  var password = ""
  var acceptedCharc = ""
  var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseletters = lowercaseletters.toUpperCase();
  var digits = '0123456789';
  var symbols = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  if (lowercase == "Y") {
    acceptedCharc += lowercaseletters
  }
  if (uppercase == "Y") {
    acceptedCharc += uppercaseletters
  }

  if (numbers == "Y") {
    acceptedCharc += digits
  }

  if (specialCharacters == "Y") {
    acceptedCharc += symbols
  }


}

function promptUser() {
  length = window.prompt("How long do you want the password?");


  if (!length) {
    return;
  }

  if (length < 8 || length > 128) {
    window.alert("invalid length");
  }

  lowercase = window.prompt("Do you wish for lowercase letters in your password?(Y or N)");

  if (!lowercase) {
    return;

  }

  lowercase = lowercase.toUpperCase();

  if (lowercase != 'Y' && lowercase != 'N') {
    window.alert("Invalid option");
  }

  uppercase = window.prompt("Do you wish for upercase letters in your password?(Y or N)");

  if (!uppercase) {
    return;
  }

  uppercase = uppercase.toUpperCase();

  if (uppercase != 'Y' && uppercase != 'N') {
    window.alert("Invalid option");
  }

  numbers = window.prompt("Do you wish for numbers in your password?(Y or N)");


  if (!numbers) {
    return;
  }

  numbers = numbers.toUpperCase();

  if (numbers != 'Y' && numbers != 'N') {
    window.alert("Invalid option");
  }

  specialCharacters = window.prompt("Do you wish for SpecialCharacters in your password?(Y or N)");

  if (!specialCharacters) {
    return;

  }

  specialCharacters = specialCharacters.toUpperCase();

  if (specialCharacters != 'Y' && specialCharacters != 'N') {
    window.alert("Invalid option");
  }
}

window.onload = promptUser();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/ 