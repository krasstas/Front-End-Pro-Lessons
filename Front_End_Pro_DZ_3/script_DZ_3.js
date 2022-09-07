// 1================

// "use strict";

// const customerNumber = getCustomerNumber();

// const evenCalc = getEvenCalc(customerNumber);

// const oddCalc = getOddCalc(customerNumber);

// console.log(`Your choice: ${customerNumber}`);
// alert(`Your choice: ${customerNumber}`);

// console.log(`Even calculation: ${evenCalc} & Odd calculation: ${oddCalc}`);
// alert(`Even calculation: ${evenCalc} & Odd calculation: ${oddCalc}`);

// function getCustomerNumber() {
//   let customerNumber;

//   do {
//     customerNumber = prompt("Choose your Number");
//   } while (isIncorrectCustomerNumber(customerNumber));

//   return +customerNumber;
// }

// function isIncorrectCustomerNumber(check) {
//   return check === null || check <= 0 || check.trim() === "" || isNaN(check);
// }

// function getEvenCalc(check) {
//   let i = 0;
//   let result = 0;
//   while (i <= check) {
//     if (i % 2 === 0) {
//       result += i;
//     }
//     i++;
//   }

//   return result;
// }

// function getOddCalc(check) {
//   let i = 0;
//   let result = 0;
//   while (i <= check) {
//     if (i % 2 === 1) {
//       result += i;
//     }
//     i++;
//   }

//   return result;
// }



// 2=========================

// "use strict";

// const customerNumber = getCustomerNumber();

// const evenCalc = getEvenCalc(customerNumber);

// const oddCalc = getOddCalc(customerNumber);

// console.log(`Your choice: ${customerNumber}`);
// alert(`Your choice: ${customerNumber}`);

// console.log(`Even calculation: ${evenCalc} & Odd calculation: ${oddCalc}`);
// alert(`Even calculation: ${evenCalc} & Odd calculation: ${oddCalc}`);

// function getCustomerNumber() {
//   let customerNumber;

//   do {
//     customerNumber = prompt("Choose your Number");
//   } while (isIncorrectCustomerNumber(customerNumber));

//   return +customerNumber;
// }

// function isIncorrectCustomerNumber(check) {
//   return check === null || check <= 0 || check.trim() === "" || isNaN(check);
// }

// function getEvenCalc(check) {
//   return getCalc(0, check);

// }

// function getOddCalc(check) {
//   return getCalc(1, check);

// }

// function getCalc (minValue, check) {
//   let result = 0;
//   for(let i = minValue; i <= check; i = i + 2) {

//     result += i;
// }

// return result;
// }



// 3====================


"use strict";

const customerNumber = getCustomerNumber();

const result = calcsOddEven(customerNumber);

console.log(`Your choice: ${customerNumber}`);
alert(`Your choice: ${customerNumber}`);

console.log(`Even calculation: ${result.evenCalc} & Odd calculation: ${result.oddCalc}`);
alert(`Even calculation: ${result.evenCalc} & Odd calculation: ${result.oddCalc}`);

function getCustomerNumber() {
  let customerNumber;

  do {
    customerNumber = prompt("Choose your Number");
  } while (isIncorrectCustomerNumber(customerNumber));

  return +customerNumber;
}

function isIncorrectCustomerNumber(check) {
  return check === null || check <= 0 || check.trim() === "" || isNaN(check);
}

function calcsOddEven(check) {
  const calcs = {
    evenCalc: 0,
    oddCalc: 0,
  };

  for (let i = 0; i <= check; i++) {
    if (i % 2 === 0) {
      calcs.evenCalc += i;
    } else {
      calcs.oddCalc += i;
    }
  }
  return calcs;
}