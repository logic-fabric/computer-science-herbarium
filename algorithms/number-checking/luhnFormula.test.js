"use strict";

const isValidForLuhnFormula = require("./luhnFormula.js");

describe("Test suite for isValidForLuhnFormula():", () => {
  test("when argument is not an integer:", () => {
    expect(() => isValidForLuhnFormula("3874")).toThrow(/must be an integer/);
    expect(() => isValidForLuhnFormula(3.14)).toThrow(/must be an integer/);
  });

  test("when argument is not a valid number:", () => {
    expect(isValidForLuhnFormula(3874)).toBe(false);
  });

  test("when argument is not a valid number:", () => {
    expect(isValidForLuhnFormula(3871)).toBe(true);
  });
});
