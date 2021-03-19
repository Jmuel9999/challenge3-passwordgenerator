// Assignment code here
window.prompt()
var passwordLength 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
