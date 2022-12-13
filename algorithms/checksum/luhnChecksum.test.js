"use strict";

const isValidForLuhnChecksum = require("./luhnChecksum.js");

describe("Test suite for isValidForLuhnChecksum():", () => {
  test("when argument is not an integer:", () => {
    expect(() => isValidForLuhnChecksum("3874")).toThrow(/must be an integer/);
    expect(() => isValidForLuhnChecksum(3.14)).toThrow(/must be an integer/);
  });

  test("when argument is not a valid number:", () => {
    expect(isValidForLuhnChecksum(3874)).toBe(false);
  });

  test("when argument is not a valid number:", () => {
    expect(isValidForLuhnChecksum(3871)).toBe(true);
  });
});
