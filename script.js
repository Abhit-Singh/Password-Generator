// Assignment Code
function generatePassword() {
  // array contatining all numeric characters that will be used for the password
  numbers= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // array containing all lowercase letters that will be used for the password
  lower= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // array containing all uppercase letters that will be included in the password
  upper=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  // array containing all the possible symbols that will be used in the password
  symbols= ['@', '%','=', '+','^', '*', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.','<','>'];
  // array that will be filled with either numbers, letters or symbols depending on the prompt choices that the user picks.
  possibleCharacters=[];

  // prompts that confirm how many and what kinds of characters will be included in the final password
sizeofpassword = prompt("How many characters would you like in your password? Choose between 8-128.")
if (sizeofpassword < 8 || sizeofpassword > 128) {
  return "Please choose a valid number of characters.";
} else {
  alert ("Your password will be " + sizeofpassword + " characters long.");
}

IncludeNumbers = confirm ("Do you want numbers in your password?");
if (!IncludeNumbers){
  alert("Your password will NOT include numbers.");
} 
else {
  alert ("Your password will include numbers.");
}

IncludeLowercase = confirm("Do you want lowercase letters in your password?");
if (!IncludeLowercase) {
  alert("Your password will NOT include lowercase letters.");
}
else {
  alert("Your password will include lowercase letters.");
}

IncludeUppercase = confirm ("Do you want uppercase letters in your password?")
if (!IncludeUppercase){
  alert ("Your password will NOT include uppercase letters.");
} 
else {
  alert ("Your password will include uppercase letters.");
}

IncludeSymbols = confirm ("Do you want symbols in your password?")
if (!IncludeSymbols) {
  alert ("Your password will NOT contain symbols.");
} 
else {
  alert ("Your password will contain symbols.");
}
// this message will be returned if the user doesn't pick atleast one valid character type
if (IncludeNumbers == false && IncludeLowercase == false && IncludeUppercase == false && IncludeSymbols == false ){
  alert ("Please pick atleast valid one character type.");
}

//.concat() groups all of the selected character types into the possibleCharacters array
if (IncludeNumbers){
  possibleCharacters = possibleCharacters.concat(numbers);
}
if (IncludeLowercase){
  possibleCharacters = possibleCharacters.concat(lower);
}
if (IncludeUppercase){
  possibleCharacters = possibleCharacters.concat(upper);
}
if (IncludeSymbols){
  possibleCharacters = possibleCharacters.concat(symbols);
}
// variable finalPassword = possibleCharacters[Total]
let finalPassword = ""
for (let i = 0; i < sizeofpassword; i++) {
  let total =[Math.floor(Math.random() * possibleCharacters.length)];
  finalPassword = finalPassword + possibleCharacters[total];
}
return finalPassword;
};

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

