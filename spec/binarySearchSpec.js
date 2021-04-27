"use strict";

const binarySearch = require("../algorithms/binary-search/binarySearch.js");

describe("Test suite for binarySearch():", () => {
  it("With an empty array", () => {
    expect(binarySearch([], 42)).toEqual([-1, 0]);
  });

  it("With an array containing one element and a match", () => {
    expect(binarySearch([42], 42)).toEqual([0, 1]);
  });

  it("With and array containing one element and no match", () => {
    expect(binarySearch([41], 42)).toEqual([-1, 1]);
  });

  it("With an array containing 7 elemets and no match", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 42)).toEqual([-1, 3]);
  });

  it("With and array containing 8 elements and no match", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 42)).toEqual([-1, 4]);
  });

  it("With an array containing 8 elements and a quick match", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual([3, 1]);
  });

  it("With an array containing 8 elements and a long match", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8)).toEqual([7, 4]);
  });
});
