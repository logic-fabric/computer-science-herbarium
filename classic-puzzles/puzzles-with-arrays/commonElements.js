"use strict";

/*
Wording:
-------
Find the common elements (as a sorted array) between two sorted arrays of integers.
*/

/**
 * Returns common elements between two sorted arrays, as a sorted array with no duplicate.
 * @param {Array.number} array1
 * @param {Array.number} array2
 * @returns
 */
function commonElements(array1, array2) {
  let commonElts = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < array1.length && pointer2 < array2.length) {
    if (commonElts.includes(array1[pointer1])) {
      pointer1++;
    } else if (array1[pointer1] == array2[pointer2]) {
      commonElts.push(array1[pointer1]);
      pointer1++;
      pointer2++;
    } else if (array1[pointer1] < array2[pointer2]) {
      pointer1++;
    } else {
      pointer2++;
    }
  }
  return commonElts;
}

module.exports = commonElements;
