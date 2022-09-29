//  global variables defined  
var generateBtn = document.querySelector("#generate");
var length
var lowercase
var uppercase
var numbers
var specialCharacters

// This function prints the generated password to the webpage
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.textContent = generatePassword();

}
// This is the where all the avaible characters, symbols, and numbers are stored
function generatePassword() {
  var randPassword = ""
  var acceptedCharc = ""
  var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseletters = lowercaseletters.toUpperCase();
  var digits = '0123456789';
  var symbols = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Lets the script know if the user selects the "Yes" options.
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
// This for loop is the actual randomizer for the password 
  for (var i = 0; i <= length; i++) {
    var random = Math.floor(Math.random() * acceptedCharc.length);
    randPassword += acceptedCharc.substring(random, random + 1)
  }

  return randPassword
}
//  This Function prompts the user with alerts of what they would like in their password
function promptUser() {
  length = window.prompt("Choose the length of your password between 8-128.");

  if (!length)
  return; {
  }

  if (length < 8 || length > 128) {
    window.alert("invalid length");
    return;
  }

  lowercase = window.prompt("Do you wish for lowercase letters in your password?(Y or N)");

  if (!lowercase) {
    return;

  }

  lowercase = lowercase.toUpperCase();

  if (lowercase != 'Y' && lowercase != 'N') {
    window.alert("Invalid option!");
  }

  uppercase = window.prompt("Do you wish for Uppercase letters in your password?(Y or N)");

  if (!uppercase) {
    return;
  }

  uppercase = uppercase.toUpperCase();

  if (uppercase != 'Y' && uppercase != 'N') {
    window.alert("Invalid option!");
  }

  numbers = window.prompt("Do you wish to have numbers in your password?(Y or N)");


  if (!numbers) {
    return;
  }

  numbers = numbers.toUpperCase();

  if (numbers != 'Y' && numbers != 'N') {
    window.alert("Invalid option!");
  }

  specialCharacters = window.prompt("Do you wish for SpecialCharacters in your password?(Y or N)");

  if (!specialCharacters) {
    return;

  }

  specialCharacters = specialCharacters.toUpperCase();

  if (specialCharacters != 'Y' && specialCharacters != 'N') {
    window.alert("Invalid option!");
  }
}

window.alert = promptUser();
// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);
