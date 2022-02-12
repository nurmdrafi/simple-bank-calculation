/* 
> no initial value outside of a function
> calculate with innerText and input
> used fuction for reduce repeated code
*/
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");

depositBtn.addEventListener("click", function () {
  // get deposit input
  const depositInput = getInputValue("deposit-input");

  // get and set deposit total
  updateTotalField("deposit-total", depositInput);

  // update balance total
  updateBalance(depositInput, true);
});

withdrawBtn.addEventListener("click", function () {
  // get windraw input
  const withdrawInput = getInputValue("withdraw-input");

  // get and set withdraw total
  updateTotalField("withdraw-total", withdrawInput);

  // update balance total
  updateBalance(withdrawInput, false);
});

// reuseable function for remove repeated code
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const newValue = parseFloat(inputField.value);
  inputField.value = "";
  return newValue;
}

function updateTotalField(textId, inputId) {
  const textField = document.getElementById(textId);
  let textAmount = parseFloat(textField.innerText);
  textAmount += inputId;
  return (textField.innerText = textAmount);
}

function updateBalance(updateAmount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  let balanceAmount = parseFloat(balanceTotal.innerText);
  if (isAdd == true) {
    balanceAmount += updateAmount;
  } else {
    balanceAmount -= updateAmount;
  }
  balanceTotal.innerText = balanceAmount;
}
