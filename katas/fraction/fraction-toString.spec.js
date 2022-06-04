"use strict";

const Fraction = require("./fraction.js");

describe("GIVEN two correct parameters to instanciate a Fraction", () => {
  describe("WHEN numeraor equal zero", () => {
    test("THEN toString() returns zero", () => {
      expect(new Fraction(0, 42).toString()).toEqual("0");
    });
  });

  describe("WHEN denominator equal one", () => {
    test("THEN toString() returns its numerator", () => {
      expect(new Fraction(42, 1).toString()).toEqual("42");
    });
  });

  describe("WHEN numerator and denominator are not prime together", () => {
    test("THEN toString() returns `${numerator}/${denominator}`", () => {
      expect(new Fraction(42, 5).toString()).toEqual("42/5");
    });
  });

  describe("WHEN numerator and denominator are not prime together", () => {
    test("THEN toString() returns its reduced version", () => {
      expect(new Fraction(42, 15).toString()).toEqual("14/5");
    });
  });
});
