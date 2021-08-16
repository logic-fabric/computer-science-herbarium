"use strict";

const recursiveFactorial = (n) => {
  if (n < 2) {
    return 1;
  }

  return n * recursiveFactorial(n - 1);
};

const factorialPromise = (n) => {
  return new Promise((resolve, reject) => {
    if (n < 2) {
      resolve(1);
    } else {
      resolve(
        factorialPromise(n - 1).then(
          (previousFactorial) => n * previousFactorial
        )
      );
    }
  });
};

const recursiveLength = (arr) => {
  if (JSON.stringify(arr) == JSON.stringify([])) {
    return 0;
  }

  return 1 + recursiveLength(arr.slice(1));
};

exports.recursiveFactorial = recursiveFactorial;
exports.factorialPromise = factorialPromise;
exports.recursiveLength = recursiveLength;
