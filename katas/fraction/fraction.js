"use strict";

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

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

    this.numerator = numerator / gcd(numerator, denominator);
    this.denominator = denominator / gcd(numerator, denominator);
  }

  toString() {
    if (this.denominator === 1) {
      return this.numerator.toString();
    }

    return `${this.numerator}/${this.denominator}`;
  }

  add(term) {
    if (!(term instanceof Fraction || term === parseInt(term))) {
      throw new Error(
        "The parameter of Fraction.add() must be a Fraction or an integer."
      );
    }

    if (parseInt(term) === term) {
      term = new Fraction(term, 1);
    }

    return new Fraction(
      this.numerator * term.denominator + this.denominator * term.numerator,
      this.denominator * term.denominator
    );
  }
}

module.exports = Fraction;
