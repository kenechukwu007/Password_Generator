// Array of special characters to be included in password
var specialCharacters = [
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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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
  const length = parseInt(prompt("Enter the desired length of the password (must be at least 8 characters or more: "));
  if (isNaN(length) || length < 8){
    alert('Password must be not be less than 8 characters');
    return null;
  }

  const addUppercase = confirm("Include uppercase letters!");
  const addLowercase = confirm("Include lowercase letters!");
  const includeSpecChar = confirm("Include special characters!");
  const includeNumbers = confirm("Include numerical values!");

  return {
    length,
    addUppercase,
    addLowercase,
    includeSpecChar,
    includeNumbers
  };

}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomElement = Math.floor(Math.random() * arr.length);
  return arr[randomElement];
}

// Function to generate password with user input
function generatePassword(options) {
  const {length, addUppercase, addLowercase, includeSpecChar, includeNumbers} = options;
  let password = '';

  let availableChars = [];
  if(includeSpecChar) availableChars.push(...includeSpecChar);
  if(addUppercase) availableChars.push(...addUppercase);
  if(addLowercase) availableChars.push(...addLowercase);
  if(includeNumbers) availableChars.push(...includeNumbers);

  if (availableChars.length === 0){
    alert("One character type must be selected(Lowercase, uppercase, special character");
    return null;
  }

  password += getRandom(specialCharacters);
  password += getRandom(upperCasedCharacters);
  password += getRandom(lowerCasedCharacters);
  password += getRandom(numericCharacters);

  for(let i = 0; i < length - 4; i++ ){
    password += getRandom(availableChars);

  }
  // shuffle the password characters
  password = password.split('').sort(() => Math.random() - 0.5).join('');

  return password;

}

// Get references to the #generate element
//var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
 const options = getPasswordOptions();
 if(options){
  const password = generatePassword(options);
  if(password){
    document.getElementById('password').value = password;
  }
 }
}

// Add event listener to generate button
document.getElementById('generate').addEventListener('click', writePassword);