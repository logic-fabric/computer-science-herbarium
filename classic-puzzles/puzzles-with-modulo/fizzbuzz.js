"use strict";

/*
Wording:
-------
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of 3 it should output “Fizz” instead of the number and for the multiples of 5 output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
*/

/**
 * @param {number} n 
 * @returns {Array.string}
 */
function fizzbuzz(n) {
  let output = [];

  if (n < 1) {
    return output;
  } else {
    for (let i = 1; i <= n; i++) {
      if (i % 15 === 0) {
        output.push("FizzBuzz");
      } else if (i % 3 === 0) {
        output.push("Fizz");
      } else if (i % 5 === 0) {
        output.push("Buzz");
      } else {
        output.push(String(i));
      }
    }
    return output;
  }
}

module.exports = fizzbuzz;
