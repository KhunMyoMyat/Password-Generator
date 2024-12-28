let generateBt = document.querySelector(".generate-pw-bt");

generateBt.addEventListener("click", function () {
  // call generate pw function
  generatePwProcess();
  // select id of show pw area
  // show pw here we have generated
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
}
