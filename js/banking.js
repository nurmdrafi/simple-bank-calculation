/* 
> no initial value outside of a function
> calculate with innerText
*/
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const balanceTotal = document.getElementById("balance-total");

depositBtn.addEventListener("click", function () {
  // get deposit input
  const depositInput = document.getElementById("deposit-input");
  const depositInputValue = getInputValue(depositInput);

  // set deposit total
  const depositTotal = document.getElementById("deposit-total");
  let depositAmount = getInnerTextValue(depositTotal);
  depositAmount += depositInputValue;
  depositTotal.innerText = depositAmount;

  // set balance total
  let balanceAmount = getInnerTextValue(balanceTotal);
  balanceAmount += depositInputValue;
  balanceTotal.innerText = balanceAmount;
});

withdrawBtn.addEventListener("click", function () {
  // get windraw input
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawInputValue = getInputValue(withdrawInput);

  // set withdraw total
  const withdrawTotal = document.getElementById("withdraw-total");
  let withdrawAmount = getInnerTextValue(withdrawTotal);
  withdrawAmount += withdrawInputValue;
  withdrawTotal.innerHTML = withdrawAmount;

  // set balance total
  let balanceAmount = getInnerTextValue(balanceTotal);
  balanceAmount -= withdrawInputValue;
  balanceTotal.innerText = balanceAmount;
});

function getInputValue(id) {
  const newValue = parseFloat(id.value);
  id.value = "";
  return newValue;
}

function getInnerTextValue(id) {
  return parseFloat(id.innerText);
}
