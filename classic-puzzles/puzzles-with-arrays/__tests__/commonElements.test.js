"use strict";

const commonElements = require("../commonElements.js");

describe("Test suite for commonElements():", () => {
  it("No common element with an empty array", () => {
    expect(commonElements([1, 2, 4, 6, 7], [])).toEqual([]);
  });

  it("Arrays with common elements", () => {
    expect(commonElements([1, 2, 4, 6, 7], [2, 3, 6, 8])).toEqual([2, 6]);
  });

  it("Arrays with no common elements", () => {
    expect(commonElements([1, 2, 4, 6, 7], [3, 5, 8])).toEqual([]);
  });

  it("Arrays with duplicated elements", () => {
    expect(
      commonElements([1, 2, 2, 4, 6, 6, 6, 7], [2, 2, 2, 3, 6, 6, 8])
    ).toEqual([2, 6]);
  });
});
