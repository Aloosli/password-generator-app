// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength;
  do {
    passwordLength = parseInt(
      prompt("How many characters would you like to use between 10 and 64?")
    );
    if (isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64) {
      alert("Please enter a valid number between 10 and 64.");
    }
  } while (isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64);
  return passwordLength;
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
    let passwordLength = getPasswordOptions();
    // Initializes an empty array to store the password
  let password = [];
    // Generate a random password of the specified length
    for (let i = 0; i < passwordLength; i++) {
      // Select a random character from one of the arrays
      let char = getRandom(upperCasedCharacters)
        || getRandom(lowerCasedCharacters)
        || getRandom(numericCharacters)
        || getRandom(specialCharacters);
      // Add the character to the password
      password.push(char);
    }

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
