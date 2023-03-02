function promoteUserInput(){
    IncludeNumbers = confirm ("Do you want numbers in your password?"); 
    IncludeLowercase = confirm("Do you want lowercase letters in your password?")
    IncludeUppercase = confirm ("Do you want uppercase letters in your password?")
    IncludeSymbols = confirm ("Do you want symbols in your password?")

    return {numbers: IncludeNumbers, lowercase: IncludeLowercase, uppercase: IncludeUppercase, symbols: IncludeSymbols};
}
function createRandomPassword() {
    // possible numbers
    numbers= ['0','1','2','3','4','5','6','7','8','9'];
    // possible lowercase
    lowerCase= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    // possible uppercase
    upperCase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    //possible symbols
    symbols = ['~','!','@','#','$','%','^','&','*','(',')','-','_','=','+','/','\\','{','}','.','<','>','?','|']
    // array of user choices
    passwordChars=[];
  
  passSize = prompt("How many characters would you like in your password? Choose between 8-128.")
  if (passSize < 8 || passSize > 128) {
    return "Invalid Password Size (Allowed Range is 8 - 128).";
  }
  
  userInput = promoteUserInput();

  if (userInput.numbers == false && userInput.lowercase == false && userInput.uppercase == false && userInput.symbols == false ){
    return "Please pick atleast one character type.";
  }
  
  if (userInput.numbers){
    passwordChars = passwordChars.concat(numbers);
  }
  if (userInput.lowercase){
    passwordChars = passwordChars.concat(lowerCase);
  }
  if (userInput.uppercase){
    passwordChars = passwordChars.concat(upperCase);
  }
  if (userInput.symbols){
    passwordChars = passwordChars.concat(symbols);
  }

  let results = ""
  for (let i = 0; i < passSize; i++) {
    let total =[Math.floor(Math.random() * passwordChars.length)];
    results = results + passwordChars[total];
  }
  return results;
  };
  
  // Write password to the #password input
  function generatePassword() {
    var password = createRandomPassword();
    document.querySelector("#random_password").value = password;
  }
  
  // Add event listener to generate button
  document.querySelector("#generate").addEventListener("click", generatePassword);
  