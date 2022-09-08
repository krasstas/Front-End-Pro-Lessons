"use strict";




const inputAction = getInputAction();

const calcAmount = getCalcAmount();

const finalResult = calculateFinalResult(calcAmount, inputAction);

console.log(finalResult);

alert(finalResult);

function getInputAction() {
    let sign;

    do {
        sign = prompt('Input Your Action:');
    } while (isInputActionInvalid(sign));
      console.log(`Your action is ${sign}`);
      alert(`Your action is ${sign}`);

    return sign;
}

function isInputActionInvalid(sign) {
    return sign !== '+' && sign !== '-' && sign !== '*' && sign !== '/';
}

function getCalcAmount() {
    return getNumber('Insert count of actions');
}

function isOperandAmountInvalid(check) {
    return isNumberInvalid(check) || check < 2;
}

function getOperand(label) {
    return getNumber(label);
}

function getNumber(title) {
    let num;

    do {
        num = prompt(title);
    } while (isOperandInvalid(num));

    return Number(num);
}

function isOperandInvalid(check) {
    return isNumberInvalid(check);
}

function isNumberInvalid(check) {
    return check === null || check.trim() === '' || isNaN(check);
}

function calculateFinalResult(amount, operator) {
    let result = getOperand('Insert Number 1');
    let expression = result;

    for (let i = 2; i <= amount; i++) {
        const operand = getOperand('Insert Number ' + i);

        result = calcAction(result, operand, operator);
        expression += ` ${operator} ${operand}`;
    }

    return `${expression} = ${result}`;
}

function calcAction(a, b, action) {
    switch (action) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}