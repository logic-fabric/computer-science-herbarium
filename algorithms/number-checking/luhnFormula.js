"use strict";

function isValidForLuhnFormula(n) {
  if (isNaN(n) || parseInt(n) !== n) {
    throw "The parameter must be an integer.";
  }

  const digits = n.toString().split("").reverse();
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    if (i % 2 === 0) {
      sum += +digits[i];
    } else {
      const doubledDigit = +digits[i] * 2;

      const transformedDigit =
        doubledDigit < 10 ? doubledDigit : doubledDigit - 9;

      sum += transformedDigit;
    }
  }

  return sum % 10 === 0;
}

module.exports = isValidForLuhnFormula;
