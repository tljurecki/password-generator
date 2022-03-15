// Assignment code here

var passwordLength = Number(prompt("How many characters will your password be?  Enter a number between 8 and 128 "));

var characterType = window.prompt("Enter a chacter type: uppercase, lowercase, numeric, or special");

function generatePassword () {
  var characterSet ="";
  var characterTypeLower = characterType.toLowerCase();
  if (characterTypeLower === "lowercase") {
    characterSet = "abcdefghijklmnopqrstuvwxyz";
  } else if (characterTypeLower === "uppercase") {
    characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (characterTypeLower === "numeric") {
    characterSet = "123456789";
  } else if(characterTypeLower === "special") {
    characterSet = "!@#$%^&*()<=>?[\]'{|}~";
  }
var returnValue = "";
for (var i = 0; i < length; i++) {
  returnValue += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
}
return returnValue; 
}
alert(generatePassword(num));





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
