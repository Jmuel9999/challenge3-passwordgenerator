 
// Assignment code here

// var randomGen = {
//   lowerCase: getLowerCase,
//   upperCase: getUpperCase,
//   number: getRandomNumber,
//   symbol: getRandomSymbol
// };

function getLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  var symbols = "!@#$%^&*(){}[]=<>/,.'"
  return symbols [Math.floor(Math.random() * symbols.length)]
}
//Translating the top 4 functions into global variables to be used throughout the code
var lowerCase = getLowerCase();
var upperCase = getUpperCase();
var randomNumber = getRandomNumber();
var randomSymbol = getRandomSymbol();

function gatherCharacters() {
  //;debugger       Tried the "parseInt" trick with "numCharacters". Successfuly made the variable a number, but did not fix the problem of not having the correct amount of characters for the password
var numCharacters = parseInt(window.prompt("How many characters would you like your password to be? Password must be between 8 and 128 characters."));
if (numCharacters < 8 || numCharacters > 128) {
  alert("You must choose between 8 and 128 characters.")
  return;
}  
console.log(numCharacters);
//Does user have lower case characters?
  var hasLowerCase = confirm("Would you like to include lower case letters? Click 'OK' to confirm."); 
//Does user have upper case characters?
  var hasUpperCase = confirm("Would you like to include upper case letters? Click 'OK' to confirm.");
//Does user have random numbers?
  var hasRandomNumber = confirm("Would you like to include random numbers? Click 'OK' to confirm.");
//Does user have random symbols?
  var hasRandomSymbol = confirm("Would you like to include random symbols? Click 'OK' to confirm.");
     if (!hasLowerCase && !hasUpperCase && !hasRandomNumber && !hasRandomSymbol) {
          alert("You must select at least one type of character for your password!");
          return;      
    }

  // console.log(getRandomNumber());
  // console.log(getLowerCase());
  // console.log(getUpperCase());
  // console.log(getRandomSymbol());

  //The charStyles object to hold the random character selections
  var passwordCharStyles = {
    numCharacters: numCharacters,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasRandomNumber: hasRandomNumber,
    hasRandomSymbol: hasRandomSymbol
  };
  return passwordCharStyles;
}

function randomInfo(objectArray) {
  var randomObjectPick = Math.floor(Math.random() * objectArray.length);
  var randomObjectEl = objectArray[randomObjectPick];

  return randomObjectEl;

}

function generatePassword() {
  var randomCharStr = "";
  var charChoices = gatherCharacters();
  var result = [];
  var viableChars = [];
  var actualChars = [];

  //Had to globally declare the variables from up top before the first function
  if (charChoices.hasLowerCase) {
    viableChars = viableChars.concat(lowerCase);
    actualChars.push(randomInfo(lowerCase));
  }
  if (charChoices.hasUpperCase) {
    viableChars = viableChars.concat(upperCase);
    actualChars.push(randomInfo(upperCase));
  }
  if (charChoices.hasRandomNumber) {
    viableChars = viableChars.concat(randomNumber);
    actualChars.push(randomInfo(randomNumber));
  }
  if (charChoices.hasRandomSymbol) {
    viableChars = viableChars.concat(randomSymbol);
    actualChars.push(randomInfo(randomSymbol));
  }
  for (var i = 0; i < charChoices.length; i++) {
    var viableChars = randomInfo(viableChars);
    result.push(viableChars);
  }
  for (var i = 0; i < actualChars.length; i++) {
    result[i] = actualChars[i];
  }
  return result.join(randomCharStr);
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

