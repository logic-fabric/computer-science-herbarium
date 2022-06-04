"use strict";

const binomialCoefficient = require("../binomialCoefficient.js");

describe("Test suite for binomialCoefficient():", () => {
  test("when one argument is not a number:", () => {
    expect(() => binomialCoefficient(42, "a")).toThrow(/must be number/);
  });

  test("when one argument is not an integer:", () => {
    expect(() => binomialCoefficient(3.14, 42)).toThrow(/must be integer/);
  });

  test("when k is strictly negative or greater than n:", () => {
    expect(binomialCoefficient(42, -1)).toBe(0);
    expect(binomialCoefficient(42, 43)).toBe(0);
  });

  test("when k equal zero or n:", () => {
    expect(binomialCoefficient(42, 0)).toBe(1);
    expect(binomialCoefficient(42, 42)).toBe(1);
  });

  test("when n = 2:", () => {
    expect(binomialCoefficient(2, 1)).toBe(2);
  });

  test("when n = 4:", () => {
    expect(binomialCoefficient(4, 2)).toBe(6);
  });

  test("when n = 42:", () => {
    expect(binomialCoefficient(42, 5)).toBe(850_668);
  });
});
