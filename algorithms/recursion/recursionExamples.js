"use strict"

function recursiveFactorial(n) {
  if (n < 2) {
    return 1;
  }

  return n * recursiveFactorial(n - 1);
}

module.exports = recursiveFactorial;
