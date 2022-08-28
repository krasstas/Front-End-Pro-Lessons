'use strict';



let firstNumber = null;
let secondNumber = null;

do {
    firstNumber = prompt('Insert First Number');
} while (incorrectValue1(firstNumber));


function incorrectValue1 (str) {
        return firstNumber === null || +firstNumber === 0 
        || firstNumber.trim() === '' || isNaN(firstNumber);
}

alert('Not Bad, Go Ahead !!!');


do {
    secondNumber = prompt('Insert Second Number');
} while (incorrectValue2(secondNumber));


function incorrectValue2 (str) {
        return secondNumber === null || +secondNumber === 0 
        || secondNumber.trim() === '' || isNaN(secondNumber);
}

alert('Good Boy! But You Can Better!!!');


switch (calc) {
    case '+':
        alert (sum);
    case '-':
        alert (sub);
    case '*':
        alert (mult);
    case '/':
        alert (div);
}


alert('Good Choice');

do {
     calc = prompt('Choose Calculation Action');
} while (inputAction(calc));



function inputAction (str) {
    return calc !== '+' || calc !== '-' 
    || calc !== '*' || calc !== '/';
}




function sum (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function sub (firstNumber, secondNumber) { 
    return firstNumber - secondNumber;
}

function mult (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function div (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}


























