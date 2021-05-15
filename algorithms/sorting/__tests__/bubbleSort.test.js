"use strict";

const bubbleSort = require("../bubbleSort.js");

describe("Test suite for bubbleSort():", () => {
  test("with an empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  test("with arrays containing one element:", () => {
    expect(bubbleSort([-1])).toEqual([-1]);
    expect(bubbleSort([42])).toEqual([42]);
  });

  test("with arrays containing two elements:", () => {
    expect(bubbleSort([3, 42])).toEqual([3, 42]);
    expect(bubbleSort([42, 3])).toEqual([3, 42]);

    expect(bubbleSort([-3, 42])).toEqual([-3, 42]);
    expect(bubbleSort([42, -3])).toEqual([-3, 42]);
  });

  test("with arrays containing multiple elements:", () => {
    expect(bubbleSort([12, 2, 33, 7])).toEqual([2, 7, 12, 33]);
    expect(bubbleSort([4, -2, 7])).toEqual([-2, 4, 7]);
  });
});
