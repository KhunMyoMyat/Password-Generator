const generateBt = document.querySelector(".generate-bt");

generateBt.addEventListener("click", function () {
  // generate pw
  let generatedPW = generatePassword();
  // get display pw place
  let displayPW = document.querySelector("#password");
  // display password
  displayPW.value = generatedPW;
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

  if (
    !inCludeUppercase &&
    !inCludeLowercase &&
    !inCludeNumber &&
    !inCludeSpecialCharacter
  ) {
    alert("At least one character type must be selected.");
    return "";
  }

  let availableChar = "";
  if (inCludeUppercase) {
    availableChar += "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
  }
  if (inCludeLowercase) {
    availableChar += "abcdefghijklnmoprstuvwxyz";
  }
  if (inCludeNumber) {
    availableChar += "1234567890";
  }
  if (inCludeSpecialCharacter) {
    availableChar += "!@#$%^&*()_+?|/><[]}{";
  }

  let generatedPW = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * availableChar.length);
    generatedPW += availableChar.charAt(randomIndex);
  }

  return generatedPW;
}
