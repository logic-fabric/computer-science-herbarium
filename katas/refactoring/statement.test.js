"use strict";

const PLAYS = require("./plays.js");
const INVOICES = require("./invoices.js");
const statement = require("./statement-personal-refacto.js");

const EXPECTED =
  `Statement for BigCo\n  Hamlet: $650.00 (55 seats)\n  As You Like It: $580.00 (35 seats)\n  Othello: $500.00 (40 seats)\nAmount owned is $1,730.00\nYou earned 47 credits\n`;

describe("GIVEN the statement function", () => {
  describe("WHEN passing INVOICES[0] and PLAYS as arguments", () => {
    test("THEN it returns the EXPECTED string", () => {
      expect(statement(INVOICES[0], PLAYS)).toBe(EXPECTED);
    });
  });
});
