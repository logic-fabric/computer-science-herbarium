"use strict";

const recursiveFactorial = require("../algorithms/recursion/recursionExamples.js");

describe("Test suite for recursiveFactorial:", () => {
  it("For base case:", () => {
    expect(recursiveFactorial(0)).toBe(1);
    expect(recursiveFactorial(1)).toBe(1);
  });

  it("For some non base cases:", () => {
    expect(recursiveFactorial(2)).toBe(2);
    expect(recursiveFactorial(5)).toBe(120);
  });
});
