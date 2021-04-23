"use strict";

/**
 * Returns an array [index where item was found, number of steps to find it].
    If item is not found, returns -1 for the index.
 * @param {Array.item} orderedList 
 * @param {item} ItemToFound 
 */
function binarySearch(orderedList, itemToFound) {
  let lowIndex = 0;
  let highIndex = orderedList.length - 1;
  let step = 0;

  while (lowIndex <= highIndex) {
    const medIndex = Math.floor((lowIndex + highIndex) / 2);
    const medValue = orderedList[medIndex];

    step++;

    if (medValue === itemToFound) return [medIndex, step];

    if (medValue > itemToFound) {
      highIndex = medIndex - 1;
    } else {
      lowIndex = medIndex + 1;
    }
  }

  return [-1, step];
}

// Tests suite:
console.log("Test with an empty array:");
console.log("Result:", binarySearch([], 42), "Expected: [-1, 0]");

console.log("Test with an array containing one element and a match:");
console.log("Result:", binarySearch([42], 42), "Expected: [0, 1]");

console.log("Test with an array containing one element and without match:");
console.log("Result:", binarySearch([41], 42), "Expected: [-1, 1]");

console.log("Test with an array containing 7 elements and without match:");
console.log(
  "Result:",
  binarySearch([1, 2, 3, 4, 5, 6, 7], 42),
  "Expected: [-1, 3]"
);

console.log("Test with an array containing 8 elements and without match:");
console.log(
  "Result:",
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 42),
  "Expected: [-1, 4]"
);

console.log("Test with an array containing 8 elements and a quick match:");
console.log(
  "Result:",
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4),
  "Expected: [3, 1]"
);

console.log("Test with an array containing 8 elements and long match:");
console.log(
  "Result:",
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8),
  "Expected: [7, 4]"
);
