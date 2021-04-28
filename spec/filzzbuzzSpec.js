"use strict";

const fizzbuzz = require("../classic-puzzles/puzzles-with-modulo/fizzbuzz.js");

describe("Test suite for fizzbuzz():", () => {
  it("Given an integer lesser or equal to zero", () => {
    expect(fizzbuzz(-1)).toEqual([]);
    expect(fizzbuzz(0)).toEqual([]);
  });

  it("Without Fizz or Buzz:", () => {
    expect(fizzbuzz(2)).toEqual(["1", "2"]);
  });

  it("With a Fizz and no Buzz", () => {
    expect(fizzbuzz(3)).toEqual(["1", "2", "Fizz"]);
  });

  it("With a Fizz and a Buzz", () => {
    expect(fizzbuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });

  it("With a FizzBuzz:", () => {
    expect(fizzbuzz(15)).toEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
    ]);
  });
});
