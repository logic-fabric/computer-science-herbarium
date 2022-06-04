"use strict";

const Fraction = require("./fraction.js");

describe("GIVEN a correctly instanciated Fraction(a, b)", () => {
  describe("WHEN we add something else than a Fraction", () => {
    test("THEN it throws an explicative error", () => {
      expect(() => new Fraction(42, 15).add(7)).toThrow(/must be a Fraction/i);
    });
  });

  describe("WHEN we add a Fraction with the same denominator", () => {
    test("THEN it returns a Fraction with the same denominator and the numerators added", () => {
      expect(new Fraction(42, 5).add(new Fraction(7, 5))).toEqual(
        new Fraction(49, 5)
      );
    });
  });

  describe("WHEN we add a Fraction with another denominator", () => {
    test("THEN it correctly add the two Fractions", () => {
      expect(new Fraction(1, 3).add(new Fraction(1, 2))).toEqual(
        new Fraction(5, 6)
      );
    });
  });
});
