"use strict";

const PLAYS = require("./plays.js");
const INVOICES = require("./invoices.js");

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;

  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    let thisAmount = 0;

    switch (play.type) {
      case "tragedy":
        thisAmount = 40000;

        if (perf.audience > 30) {
          thisAmount += 1000 * (perf.audience - 30);
        }
        break;

      case "comedy":
        thisAmount = 30000;
        if (perf.audience > 20) {
          thisAmount += 10000 + 500 * (perf.audience - 20);
        }
        thisAmount += 300 * perf.audience;
        break;

      default:
        throw new Error(`unknown type: ${play.type}`);
    }

    // add some volume credits
    volumeCredits += Math.max(perf.audience - 30, 0);
    // add a credit for each group of five audience members present at a comedy
    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

    // print the line for this performance
    result += `  ${play.name}: ${format(thisAmount / 100)} (${
      perf.audience
    } seats)\n`;

    totalAmount += thisAmount;
  }

  result += `Amount owned is ${format(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;

  return result;
}

console.log(statement(INVOICES[0], PLAYS));

module.exports = statement;