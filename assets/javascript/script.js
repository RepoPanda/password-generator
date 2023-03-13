// Arrays of characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];


// Assignment Code
var generateBtn = document.querySelector("#generate");//(BEGINprogram) BIG RED generate botton on page JS linked to HTML aka BEGINprogram

function generatePassword(){

  return();//--->logs into page card. result will go here.
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();//undefined function. will need to create.
  var passwordText = document.querySelector("#password");

  passwordText.value = password;//--> (ENDProgram)takes value of generatePassword function and pushes it to HTML cardbody textarea aka 'ENDProgram'

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

