"use strict";


const inputAction = getInputAction();

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


