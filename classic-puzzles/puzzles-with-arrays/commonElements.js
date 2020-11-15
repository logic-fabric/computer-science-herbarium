/*
Wording:
-------
Find the common elements (as a sorted array) between two sorted arrays of integers.
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
    return commonElts
}

// Tests suite:
console.log("Test with an empty array:");
console.log(
    "Result:", commonElements(
        [1, 2, 4, 6, 7],
        []
    ),
    "Expected: []"
);

console.log("Test arrays with common elements");
console.log(
    "Result:", commonElements(
        [1, 2, 4, 6, 7],
        [2, 3, 6, 8]
    ),
    "Expected: [2, 6]"
);

console.log("Test arrays with no common elements");
console.log(
    "Result:", commonElements(
        [1, 2, 4, 6, 7],
        [3, 5, 8]
    ),
    "Expected: []"
);

console.log("Test arrays with duplicated elements");
console.log(
    "Result:", commonElements(
        [1, 2, 2, 4, 6, 6, 6, 7],
        [2, 2, 2, 3, 6, 6, 8]
    ),
    "Expected: [2, 6]"
);