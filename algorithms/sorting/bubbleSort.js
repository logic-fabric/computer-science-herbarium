"use strict";

/**
 * Time complexity: O(n**2) | Best case: o(n)
 * Space complexity: O(1) if destructive | O(n) if implemented as pure function
 * @param {number[]} arrayToSort
 * @returns
 */
function bubbleSort(arrayToSort) {
  let noElementSwapped;
  const arr = [...arrayToSort];

  for (let i = 0; i < arr.length - 1; i++) {
    noElementSwapped = true;

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noElementSwapped = false;
      }
    }

    if (noElementSwapped) return arr;
  }

  return arr;
}

module.exports = bubbleSort;
