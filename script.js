// Array of special characters to be included in password
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Function to prompt user for password options
function getPasswordOptions() {
  // Initialize an object to store the password options
  let passwordOptions = {};

  // Prompt the user for the password length

  let passwordLength;

  do {
    passwordLength = parseInt(
      prompt("How many characters would you like to use between 10 and 64?")
    );

    if (isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64) {
      alert("Please enter a valid number between 10 and 64.");
    }
  } while (isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64);
  passwordOptions.length = passwordLength;

  // Prompt the user for the character types to include
  passwordOptions.includeUppercase = confirm(
    "Would you like to include uppercase letters in the password?"
  );
  passwordOptions.includeLowercase = confirm(
    "Would you like to include lowercase letters in the password?"
  );
  passwordOptions.includeNumbers = confirm(
    "Would you like to include numbers in the password?"
  );
  passwordOptions.includeSpecial = confirm(
    "Would you like to include special characters in the password?"
  );

  // If the user did not select at least one character type, alert the user and call the getPasswordOptions function again
  if (!Object.values(passwordOptions).some(Boolean)) {
    alert("Please select at least one character type.");
    passwordOptions = getPasswordOptions();
  }
  // Return the password options object
  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  // Generate a random index
  let index = Math.floor(Math.random() * arr.length);
  // Return the element at the random index
  return arr[index];
}

// Function to generate password with user input
function generatePassword() {
  // Calls the getPasswordOptions function
  let passwordOptions = getPasswordOptions();
  // Initialize an array to store the character types to include in the password
  const characterTypes = [];

  // Prompt the user for their password options until at least one character type has been selected
  if (passwordOptions.includeUppercase) {
    characterTypes.push(upperCasedCharacters);
  }
  if (passwordOptions.includeLowercase) {
    characterTypes.push(lowerCasedCharacters);
  }
  if (passwordOptions.includeNumbers) {
    characterTypes.push(numericCharacters);
  }
  if (passwordOptions.includeSpecial) {
    characterTypes.push(specialCharacters);
  }

  // If the characterTypes array is empty, alert the user to select at least one character type and set passwordOptions to the value returned by the getPasswordOptions function
  if (!characterTypes.length) {
    alert("Please select at least one character type.");
    passwordOptions = getPasswordOptions();
  }

  // Initializes an empty array to store the password
  let password = [];

  // Generate a random password of the specified length
  for (let i = 0; i < passwordOptions.length; i++) {
    // Select a random character type array
    let characterType = getRandom(characterTypes);
    // Push a random character from the selected array to the password
    password.push(getRandom(characterType));
  }

  // Return the generated password
  return password.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Generate a new password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // Write the generated password to the #password input
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
