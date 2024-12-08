const generateBt = document.querySelector(".generate-bt");

generateBt.addEventListener("click", function () {
  // generate pw
  generatePassword();
  // get display pw place
  // display password
});

function generatePassword() {
  let passwordLength = parseInt(
    prompt("Enter password length (between 8 and 128):")
  );

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid input. Please enter a number between 8 and 128");
    return "";
  }

  let inCludeUppercase = confirm("Include Uppercase letters?");
  let inCludeLowercase = confirm("Include Lowercase letters?");
  let inCludeNumber = confirm("Include Numbers?");
  let inCludeSpecialCharacter = confirm("Include Special Characters?");
}
