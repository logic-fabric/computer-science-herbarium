/*
Wording:
-------
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of 3 it should output “Fizz” instead of the number and for the multiples of 5 output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
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

// Tests suite:
console.log("Test fizzbuzz for an integer lesser or equal to zero:");
console.log(
    "Result:", fizzbuzz(-1),
    "Expected: []"
);
console.log(
    "Result:", fizzbuzz(0),
    "Expected: []"
);

console.log("Test fizzbuzz without Fizz or Buzz:");
console.log(
    "Result:", fizzbuzz(2),
    'Expected: ["1", "2"]'
);

console.log("Test fizzbuzz with a Fizz:");
console.log(
    "Result:", fizzbuzz(3),
    'Expected: ["1", "2", "Fizz"]'
);

console.log("Test fizzbuzz with a Fizz and a Buzz:");
console.log(
    "Result:", fizzbuzz(5),
    'Expected: ["1", "2", "Fizz", "4", "Buzz"]'
);

console.log("Test fizzbuzz with a FizzBuzz:");
console.log(
    "Result:", fizzbuzz(15),
    'Expected: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]'
);