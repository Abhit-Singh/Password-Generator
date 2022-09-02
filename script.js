// Assignment Code
var generateBtn = document.querySelector("#generate");
// Created arrays of possible character choices
var  specialCharOptions = ["!",'"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", ']',"^", '_', "`", "{", "|", "}", "~" ]
var  letterOptionsLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var  letterOptionsUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var  numberOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; 


let possibleCharOptions = [];


function generatePassword () {
  //Ask user for length of password
  var userChoiceLength = parseInt(prompt("How long would you like your password to be?"));
  //This will verify that user must select length between 8 and 128
  if (userChoiceLength < 8 || 128 < userChoiceLength) {
    alert("Only passwords between the 8 - 128 can be generated");
    return;
  }

  

  //user can choose if they want special character in their password
  var userChoiceSpecChar = confirm("Do you want to use special characters in this password");

  //user can choose if they want lower case letter in their password
  var userChoiceLowerChar = confirm("Do you want to use lowercase letters in this password?");

  //user can choose if they want uppercase letter in their password
  var userChoiceUpperChar = confirm("Do you want to use UPPERCASE letters in this password?");

  //user can choose if they want number in their password
  var userChoiceNumber = confirm("Do you want to use numbers in this password?");

  //user must select one character type 
  if (!userChoiceSpecChar && !userChoiceLowerChar && !userChoiceUpperChar && !userChoiceNumber) {
    alert("You must select one character type");
    return;
  }

 
  if (userChoiceSpecChar) {
    possibleCharOptions = possibleCharOptions.concat(specialCharOptions);
  }

 
  if (userChoiceLowerChar) {
    possibleCharOptions = possibleCharOptions.concat(letterOptionsLower);
  }

 
  if (userChoiceUpperChar) {
    possibleCharOptions = possibleCharOptions.concat(letterOptionsUpper);
  }
    
  
  if (userChoiceNumber) {
    possibleCharOptions = possibleCharOptions.concat(numberOptions);
  }

  
  let result = [];
  for (var i = 0; i < userChoiceLength; i++) {  
    var randomChar = possibleCharOptions[Math.floor(Math.random() * possibleCharOptions.length)];
    console.log(randomChar);
    result.push(randomChar);
    console.log(result);
  }

 
  return result.join('');
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
