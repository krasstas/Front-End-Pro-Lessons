"use strict";

let firstNumber = null;
let secondNumber = null;

do {
  firstNumber = prompt("Insert First Number");
} while (isIncorrectValue1(firstNumber));

firstNumber = +firstNumber;
console.log(firstNumber);

alert("Not Bad, Go Ahead !!!");

do {
  secondNumber = prompt("Insert Second Number");
} while (isIncorrectValue2(secondNumber));

secondNumber = +secondNumber;
console.log(secondNumber);

alert("Good Boy! But You Can Better!!!");

let calcAction;

do {
  calcAction = prompt("Choose Calculation Action");
} while (isInputActionInvalid(calcAction));

let result = null;

switch (calcAction) {
  case "+":
    result = firstNumber + secondNumber;
    break;
  case "-":
    result = firstNumber - secondNumber;
    break;
  case "*":
    result = firstNumber * secondNumber;
    break;
  case "/":
    result = firstNumber / secondNumber;
    break;
}

console.log(calcAction);

alert("Good Choice");

alert(firstNumber + calcAction + secondNumber + "=" + result);
console.log(result);

function isIncorrectValue1(str) {
  return (
    firstNumber === null ||
    +firstNumber === 0 ||
    firstNumber.trim() === "" ||
    isNaN(firstNumber)
  );
}

function isIncorrectValue2(str) {
  return (
    secondNumber === null ||
    +secondNumber === 0 ||
    secondNumber.trim() === "" ||
    isNaN(secondNumber)
  );
}

function isInputActionInvalid(calc) {
  return calc !== "+" && calc !== "-" && calc !== "*" && calc !== "/";
}
