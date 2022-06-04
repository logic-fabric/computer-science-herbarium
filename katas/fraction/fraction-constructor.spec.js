"use strict";

const Fraction = require("./fraction.js");

describe("GIVEN two parameters to instanciate a Fraction", () => {
  describe("WHEN numerator or denominator is not a number", () => {
    test("THEN it throws an explicative error", () => {
      expect(() => new Fraction(42, "15")).toThrow(/must be number/i);
      expect(() => new Fraction("42", 15)).toThrow(/must be number/i);
    });
  });

  describe("WHEN numerator or denominator is not an integer", () => {
    test("THEN it throws an explicative error", () => {
      expect(() => new Fraction(4.2, 15)).toThrow(/must be integer/i);
      expect(() => new Fraction(42, 1.5)).toThrow(/must be integer/i);
    });
  });

  describe("WHEN denominator is zero", () => {
    test("THEN it throws an explicative error", () => {
      expect(() => new Fraction(42, 0)).toThrow(/not be zero/i);
    });
  });
});
