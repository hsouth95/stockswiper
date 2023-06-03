import yahooFinance from "yahoo-finance2";

const POPULAR_SYMBOLS = [
  "AAPL",
  "MSFT",
  "GOOG",
  "AMZN",
  "TSLA",
  "BRK-B",
  "XOM",
  "V",
  "WMT",
  "NVDA",
  "MA",
  //"005930.KS", // SAMSUNG
  "PFE",
  "KO",
  "META",
  "PEP",
  "SHEL",
  "MCD",
  "DIS",
  "CSCO",
  "ACN",
  "CRM",
  "ADBE",
  //"NIKE",
];

let financeInfo = {};

export const handler = async function (event, context) {
  if (Object.keys(financeInfo).length >= 1) {
    return financeInfo;
  }
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  for (const symbol of POPULAR_SYMBOLS) {
    let data = {};
    try {
      data = await yahooFinance.historical(symbol, {
        period1: yesterday,
        interval: "1d",
      });
      financeInfo[symbol] = data;
    } catch (e) {
      console.log(e);
    }
  }

  return financeInfo;
};
