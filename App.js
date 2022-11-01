import React from "react";
import yahooFinance from "yahoo-finance2";

import SwapperView from "./views/SwapperView";
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
  "005930.KS", // SAMSUNG
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
  "NIKE",
];
export default function App() {
  return <SwapperView symbol={POPULAR_SYMBOLS[Math.floor(Math.random() * POPULAR_SYMBOLS.length)]} />;
}
