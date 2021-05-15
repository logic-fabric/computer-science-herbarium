"use strict";

function binomialCoefficient(n, k) {
  if (isNaN(n) || isNaN(k)) {
    throw "The two parameters of binomialCoefficient() must be numbers.";
  }

  if (n !== parseInt(n) || k !== parseInt(k)) {
    throw "The two parameters of binomialCoefficient() must be integers.";
  }

  if (k < 0 || k > n) return 0;

  if (k === 0 || k === n) return 1;

  if (k > n - k) k = n - k;

  let coeff = 1;
  for (let i = 1; i <= k; i++) {
    coeff *= (n - i + 1) / i;
  }

  return Math.round(coeff);
}

module.exports = binomialCoefficient;
