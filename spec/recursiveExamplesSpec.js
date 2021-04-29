"use strict";

const rec = require("../algorithms/recursion/recursionExamples.js");

describe("Test suite for recursiveFactorial:", () => {
  it("For base case:", () => {
    expect(rec.recursiveFactorial(0)).toBe(1);
    expect(rec.recursiveFactorial(1)).toBe(1);
  });

  it("For some non base cases:", () => {
    expect(rec.recursiveFactorial(2)).toBe(2);
    expect(rec.recursiveFactorial(5)).toBe(120);
  });
});

describe("Test suite for recursiveLength:", () => {
  it("With an empty array", () => {
    expect(rec.recursiveLength([])).toBe(0);
  });

  it("With an array containing one element:", () => {
    expect(rec.recursiveLength([1])).toBe(1);
    expect(rec.recursiveLength([42])).toBe(1);
  });

  it("With an array containing multiple elements:", () => {
    expect(rec.recursiveLength([1, 4, 2, 3])).toBe(4);
    expect(rec.recursiveLength([4, -2, 7])).toBe(3);
  });
});
