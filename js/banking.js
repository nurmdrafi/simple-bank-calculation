/* 
> no initial value outside of a function
> calculate with innerText
*/
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const balanceTotal = document.getElementById("balance-total");

depositBtn.addEventListener("click", function () {
  // get deposit input
  const depositInput = getInputValue("deposit-input");

  // get and set deposit total
  getAndSetInnerTextValue("deposit-total", depositInput);

  // set balance total
  let balanceAmount = parseFloat(balanceTotal.innerText);
  // let balanceAmount = getInnerTextValue(balanceTotal);
  balanceAmount += depositInput;
  balanceTotal.innerText = balanceAmount;
});

withdrawBtn.addEventListener("click", function () {
  // get windraw input
  const withdrawInput = getInputValue("withdraw-input");

  // get and set withdraw total
  getAndSetInnerTextValue("withdraw-total", withdrawInput);

  // set balance total
  let balanceAmount = parseFloat(balanceTotal.innerText);
  balanceAmount -= withdrawInput;
  balanceTotal.innerText = balanceAmount;
});

function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const newValue = parseFloat(inputField.value);
  inputField.value = "";
  return newValue;
}

function getAndSetInnerTextValue(textId, inputId) {
  const textField = document.getElementById(textId);
  let textAmount = parseFloat(textField.innerText);
  textAmount += inputId;
  return textField.innerText = textAmount;
}
