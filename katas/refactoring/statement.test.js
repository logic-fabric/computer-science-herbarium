"use strict";

const statement = require("./statement-personal-refacto.js");

const PLAYS = require("./plays.js");
const INVOICES = require("./invoices.js");

const EXPECTED = `Statement for BigCo\n  Hamlet: $650.00 (55 seats)\n  As You Like It: $580.00 (35 seats)\n  Othello: $500.00 (40 seats)\nAmount owned is $1,730.00\nYou earned 47 credits\n`;

describe("GIVEN the statement function", () => {
  describe("WHEN passing INVOICES[0] and PLAYS as arguments", () => {
    test("THEN it returns the EXPECTED string", () => {
      expect(statement(INVOICES[0], PLAYS)).toBe(EXPECTED);
    });
  });

  describe("WHEN passing an invoice with a 'weird' type of play", () => {
    test("THEN it throws an error 'unknown type: weird'", () => {
      const WEIRD_INVOICE = {
        customer: "WeirdoCo",
        performances: [{ playID: "creep", audience: 55 }],
      };
      const WEIRD_PLAYS = {
        creep: {
          name: "Creepy play",
          type: "weird",
        },
      };

      expect(() => {
        statement(WEIRD_INVOICE, WEIRD_PLAYS);
      }).toThrow(Error);
      expect(() => {
        statement(WEIRD_INVOICE, WEIRD_PLAYS);
      }).toThrow("unknown type: weird");
    });
  });
});
