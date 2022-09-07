"use strict";


const inputAction = getInputAction();

const calcAmount = getcalcAmount();

const numAmount = getNumAmount('Insert Your Numbers:');

const calcNumAmount = calculateNumAmount(calcAmount, inputAction);

console.log(inputAction);


function getInputAction() {
  let calc;
  do {
    calc = prompt('Input Your Action:');
  } while(isInputActionInvalid(calc));

  return calc;
}

function isInputActionInvalid(calc) {
  return calc !== "+" && calc !== "-" && calc !== "*" && calc !== "/";
}


function getcalcAmount() {
  let operand;
  do {
    operand = prompt('Insert Operands Amount');
  } while (isIncorrectCalcAmount(operand));

  return +operand;
}


function isIncorrectCalcAmount(check) {
  return (
    check === null || +check === 0 || check.trim() === "" 
    || isNaN(check) || check < 2);
}


function getNumAmount() {
  let num;

  do{
    num = prompt('Choose Your Numbers');
  } while(isNumAmountInvalid(num));

  return +num;
}


function isNumAmountInvalid(check) {
  return (check === null || +check === 0 || 
    check.trim() === ""  || isNaN(check));
}


function calculateNumAmount( num, inputAction) {
  for (let i = 0; i < 2; i++) {
    const numAmount = getNumAmount('Number:' + (i+1));

    console.log(numAmount);
  }

}