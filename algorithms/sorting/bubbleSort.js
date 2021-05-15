"use strict";

function bubbleSort(arrayToSort) {
  let noElementSwapped;
  const arr = [...arrayToSort];

  for (let i = 0; i < arr.length - 1; i++) {
    noElementSwapped = true;

    for (let j = i; j < arr.length - 1; j++) {
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
