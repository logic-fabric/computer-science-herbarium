"use strict";

const PLAYS = require("./plays.js");
const INVOICES = require("./invoices.js");

// Utility function:
const formatAmount = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
}).format;

// Statement "String builders":
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

// Business logic:
function getAmountAndCreditsVolumePerPerformance(performance, performanceType) {
  let amount, volume;

  volume = Math.max(performance.audience - 30, 0);

  switch (performanceType) {
    case "tragedy":
      amount = 40000 + Math.max(1000 * (performance.audience - 30), 0);
      break;

    case "comedy":
      amount =
        30000 +
        300 * performance.audience +
        Math.max(10000 + 500 * (performance.audience - 20), 0);

      volume += Math.floor(performance.audience / 5);
      break;

    default:
      throw new Error(`unknown type: ${performanceType}`);
  }

  return { amount, volume };
}

// Main function:
function statement(invoice, plays) {
  let statement = statementHeader(invoice.customer);

  let totalAmount = 0;
  let volumeCredits = 0;

  for (let performance of invoice.performances) {
    const performanceName = plays[performance.playID].name;
    const performanceType = plays[performance.playID].type;

    let { amount, volume } = getAmountAndCreditsVolumePerPerformance(
      performance,
      performanceType
    );

    volumeCredits += volume;
    totalAmount += amount;

    // print the line for this performance
    statement += statementLineByPerformance(
      performanceName,
      amount,
      performance.audience
    );
  }

  statement += statementSummary(totalAmount, volumeCredits);

  return statement;
}

module.exports = statement;
