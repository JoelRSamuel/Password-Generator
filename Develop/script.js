var generateBtn = document.querySelector("#generate");

//---------this function gives us the final password-----------
function writePassword() {
  var lengthPassword = "";
    while (!(lengthPassword >= 8 && lengthPassword <= 128)) {
       lengthPassword = window.prompt("Enter password length (between 8 and 128)");
    }

//---------variables for window.promt message-----------
  var includeLower = "";
	var includeUpper = "";
	var includeSpecial = "";
	var includeNumbers = "";

  while(!(includeLower || includeUpper || includeSpecial || includeNumbers))
	{
     includeLower = window.prompt("Include Lower Case characters?") == "Y";
     includeUpper = window.prompt("Include Upper Case characters?") == "Y";
     includeSpecial = window.prompt("Include Special characters?") == "Y";
     includeNumbers = window.prompt("Include numbers?") == "Y";

	}
//---------establishes peramiters for user-----------
  var password = generatePassword(lengthPassword, includeLower, includeUpper, includeSpecial, includeNumbers)

//---------text are to display password-----------
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//---------generate password button-----------
generateBtn.addEventListener("click", writePassword);

//-------this function contains the variables included in the password--------
function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
var charactersToChooseFrom = ""
var result = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "0123456789"
var special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

if (includeLowercase) {
charactersToChooseFrom += lowercase;
}
if (includeUppercase) {
charactersToChooseFrom += uppercase;
}
if (includeNumeric) {
charactersToChooseFrom += numeric;
}
if (includeSpecial) {
charactersToChooseFrom += special;
}
  for (var i=0; i < passwordLength; i++) {
    var sizeOfCharacterSet = charactersToChooseFrom.length;
    var indexOfCharacterToAdd = getRandomInt(0, sizeOfCharacterSet - 1);
    var characterToAdd = charactersToChooseFrom[indexOfCharacterToAdd];
    result += characterToAdd;
  }
 return result;
}

//-----------this function gives us a random number for the numeric variable---------------------

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
//-----------------------------------------------------------------------
