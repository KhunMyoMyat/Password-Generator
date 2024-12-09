let generateBt = document.querySelector(".generate-pw-bt");

generateBt.addEventListener("click", function () {
  // call generate pw function
  generatePwProcess();
  // select id of show pw area
  // show pw here we have generated
});

function generatePwProcess() {
  let passwordQuantityprompt = parseInt(
    prompt("Enter the quantity of password between 8 and 128")
  );
  console.log(typeof passwordQuantityprompt);
}
