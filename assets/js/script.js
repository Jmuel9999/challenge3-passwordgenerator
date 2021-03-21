 
// Assignment code here

var randomGen = {
  lowerCase: getLowerCase,
  upperCase: getUpperCase,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

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
// console.log(getRandomNumber());
// console.log(getLowerCase());
// console.log(getUpperCase());
// console.log(getRandomSymbol());

  function generatePassword() {
    //This allows the generator 
    //var randomChar = "";
    var numCharacters = window.prompt("How many characters would you like your password to be? Password must be between 8 and 128 characters.");
    if (numCharacters < 8 || numCharacters > 128) {
      alert("You must choose between 8 and 128 characters.")
      return;
    }  
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
      //The charStyles object to hold the random character selections
      var charStyles = {
        //numCharacters: numCharacters,
        hasLowerCase: hasLowerCase,
        hasUpperCase: hasUpperCase,
        hasRandomNumber: hasRandomNumber,
        hasRandomSymbol: hasRandomSymbol
      };
      return(charStyles);

     /*if(charStyles.hasLowerCase) {
       var ra
     } */

    console.log(generatePassword);
    // var finalPassword = (generatePassword);
    //var remainingCharacters = charLength - userPassword.length;
    // generatePassword();
}

function randomInfo() {

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

