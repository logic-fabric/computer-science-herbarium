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

function getAmountAndCreditsVolumePerPerformance(performance, performanceType) {
  let amount = 0;
  let volume = 0;

  switch (performanceType) {
    case "tragedy":
      amount = 40000;

      if (performance.audience > 30) {
        amount += 1000 * (performance.audience - 30);
      }
      break;

    case "comedy":
      amount = 30000;

      if (performance.audience > 20) {
        amount += 10000 + 500 * (performance.audience - 20);
      }
      amount += 300 * performance.audience;

      volume += Math.floor(performance.audience / 5);
      break;

    default:
      throw new Error(`unknown type: ${performanceType}`);
  }

  // add some volume credits
  volume += Math.max(performance.audience - 30, 0);

  return {
    amount,
    volume,
  };
}

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;

  let result = statementHeader(invoice.customer);

  for (let performance of invoice.performances) {
    const play = plays[performance.playID];

    let { amount, volume } = getAmountAndCreditsVolumePerPerformance(
      performance,
      play.type
    );

    volumeCredits += volume;
    totalAmount += amount;

    // print the line for this performance
    result += statementLineByPerformance(
      play.name,
      amount,
      performance.audience
    );
  }

  result += statementSummary(totalAmount, volumeCredits);

  return result;
}

module.exports = statement;
