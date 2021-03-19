// Assignment code here
var randomString = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    window.prompt("How many characters would you like your password to be? Password must be between 8 and 128 characters.");
    if (prompt > 8 || prompt < 128) {

    }
    else {
      alert("You must choose between 8 and 128 characters.")
    }
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.'"
  return symbols [Math.floor(Math.random() * symbols.length)]
}
console.log(getRandomSymbol());