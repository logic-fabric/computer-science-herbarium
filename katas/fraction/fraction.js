"use strict";

class Fraction {
  /**
   * @param {number} numerator
   * @param {number} denominator
   */
  constructor(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
      throw new Error("The two parameters of Fraction() must be numbers.");
    }

    if (
      numerator !== parseInt(numerator) ||
      denominator !== parseInt(denominator)
    ) {
      throw new Error("The two parameters of Fraction() must be integers.");
    }

    if (denominator === 0) {
      throw new Error("The second parameter of Fraction() can not be zero.");
    }

    this.numerator = numerator;
    this.denominator = denominator;
  }
}

module.exports = Fraction;
