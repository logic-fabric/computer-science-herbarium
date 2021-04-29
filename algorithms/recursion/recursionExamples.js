"use strict";

const recursiveFactorial = (n) => {
  if (n < 2) {
    return 1;
  }

  return n * recursiveFactorial(n - 1);
};

const recursiveLength = (arr) => {
  if (JSON.stringify(arr) == JSON.stringify([])) {
    return 0;
  }

  return 1 + recursiveLength(arr.slice(1));
};

exports.recursiveFactorial = recursiveFactorial;
exports.recursiveLength = recursiveLength;
