"use strict";

const PLAYS = require("./plays.js");
const INVOICES = require("./invoices.js");

const formatAmount = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
}).format;

function statementHeader(customer) {
  return `Statement for ${customer}\n`;
}

function statementLineByPerformance(name, amount, audience) {
  return `  ${name}: ${formatAmount(amount / 100)} (${audience} seats)\n`;
}

function statementSummary(totalAmount, volumeCredits) {
  return `Amount owned is ${formatAmount(
    totalAmount / 100
  )}\nYou earned ${volumeCredits} credits\n`;
}

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;

  let result = statementHeader(invoice.customer);

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

        volumeCredits += Math.floor(perf.audience / 5);
        break;

      default:
        throw new Error(`unknown type: ${play.type}`);
    }

    totalAmount += thisAmount;

    // add some volume credits
    volumeCredits += Math.max(perf.audience - 30, 0);

    // print the line for this performance
    result += statementLineByPerformance(play.name, thisAmount, perf.audience);
  }

  result += statementSummary(totalAmount, volumeCredits);

  return result;
}

module.exports = statement;
