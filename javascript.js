let generateBt = document.querySelector(".generate-pw-bt");

generateBt.addEventListener("click", function () {
  // call generate pw function
  var generatedPw = generatePwProcess();
  // select id of show pw area
  var pwShowArea = document.querySelector("#show-pw-place");
  // show pw here we have generated
  pwShowArea.value = generatedPw;
});

function generatePwProcess() {
  // Ask the user for the password length
  let passwordQuantityprompt = parseInt(
    prompt("Enter the quantity of password between 8 and 128")
  );

  // Check if the length is valid
  if (
    isNaN(passwordQuantityprompt) ||
    passwordQuantityprompt < 8 ||
    passwordQuantityprompt > 128
  ) {
    alert("Invalid length. Please enter a number between 8 and 128.");
    return ""; // Stop if the input is invalid
  }

  // Ask the user what types of characters to include
  var includeUpperCase = confirm("Include Uppercase letters?");
  var includeLowerCase = confirm("Include Lowercase letters?");
  var includeNumbers = confirm("Include Numbers?");
  var includeSpecialChars = confirm("Include Special Characters?");

  // Define the character groups
  var charGroups = {
    upper: "ABCDEFGHIJKLNMOPQRSTUVWXYZ",
    lower: "abcdefghijklnmopqrstuvwxyz",
    numbers: "0123456789",
    special: "!@#$%^&*()_+-=[]{}|;:,.<>?",
  };

  // Collect the chosen characters into one string
  var availableChars = "";
  if (includeUpperCase) availableChars += charGroups.upper;
  if (includeLowerCase) availableChars += charGroups.lower;
  if (includeNumbers) availableChars += charGroups.numbers;
  if (includeSpecialChars) availableChars += charGroups.special;

  // Generate the password
  var generatedPw = "";
  for (var i = 0; i < passwordQuantityprompt; i++) {
    // Pick a random character from the available characters
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    generatedPw += availableChars[randomIndex];
  }

  // Return the completed password
  return generatedPw;
}
