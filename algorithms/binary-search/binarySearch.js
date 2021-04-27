"use strict";

/**
 * Returns an array [index where item was found, number of steps to find it].
    If item is not found, returns -1 for the index.
 * @param {Array.number} orderedList 
 * @param {number} ItemToFound 
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

module.exports = binarySearch;
