var lengthOfPassword = 0;
var chosenArray = [];

// Arrays of characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];


// (1)Assignment Code
var generateBtn = document.querySelector('#generate');//(BEGINprogram) BIG RED generate botton on page JS linked to HTML aka BEGINprogram

// (2) Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// (3) Write password to the #password input
function writePassword() {
  var trueBoo = promptValues(); //(5)returns boolean value of promptValues

  if (trueBoo) {//(6)
    var password = generatePassword(); //(7)undefined function. will need to create.
    var passwordText = document.querySelector("#password"); //will send back to HTML (ENDProgram)

    passwordText.value = password; //--> (8)(ENDProgram)takes value of generatePassword function and pushes it to HTML cardbody textarea aka 'ENDProgram'
  }
}

// (4)
function promptValues() {
  chosenArray = [];

  lengthOfPassword = parseInt(prompt("Please provide a numerical password length between 8 and 128."));

  if(isNaN(lengthOfPassword) || lengthOfPassword < 8 || lengthOfPassword >128) {
    alert('Not a valid entry. Please try again. Please provide a numeric number length between 8 and 128.');
    return false;
  }
  //will have user confirm the use of upperCasedCharacters array or not.
  if (confirm("Would you like to include uppercase letters in your password?")) {
    chosenArray = chosenArray.concat(upperCasedCharacters);
  }
  //will have user confirm the use of lowerCasedCharacters array or not.
  if (confirm("Would you like to include lowercase letters in your password?")) {
    chosenArray = chosenArray.concat(lowerCasedCharacters);
  }
  //will have user confirm the use of numericCharacters array or not.
  if (confirm("Would you like to include numeric characters in your password?")) {
    chosenArray = chosenArray.concat(numericCharacters);
  }
  //will have user confirm the use of specialCharacters array or not.
  if (confirm("Would you like to include special characters in your password?")) {
    chosenArray = chosenArray.concat(specialCharacters);
  }

  return true;
}




// (5)
function generatePassword(){
  var password = '';
  for(var i = 0; i < lengthOfPassword; i++){
      var randomI = Math.floor(Math.random() * chosenArray.length);
      password = password + chosenArray[randomI];
  }

  return password;//--->(end)logs into page card. result will go here.
}



