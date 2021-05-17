"use strict";

const caesarCipher = require("../caesarCipher.js");

describe("Test suite for caesarCipher():", () => {
  test("with a string to encrypt", () => {
    expect(caesarCipher("Hello World!", -3)).toBe("Ebiil Tloia!");
  });

  test("with a string to decrypt", () => {
    expect(caesarCipher("Ebiil Tloia!", 23, true)).toBe("Hello World!");
  });
});
