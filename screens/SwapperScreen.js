import SwapperView from "../views/SwapperView";
import { useEffect, useState } from "react";

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

const randomSymbols = [...POPULAR_SYMBOLS].sort(() => 0.5 - Math.random()).slice(0, 5);
console.log(randomSymbols);
let answers = [];

export default function SwapperScreen({ navigation }) {
  const [count, setCount] = useState(0);
  const [symbol, setSymbol] = useState(randomSymbols[count]);

  const setNextSymbol = () => {
    let tempCount = count + 1;
    setCount(tempCount);

    setSymbol(randomSymbols[tempCount]);
  };
  const onWrong = () => {
    console.log("Wrong!");
    answers.push(false);
    if (count + 1 != randomSymbols.length) {
      setNextSymbol();
    }
  };
  const onRight = () => {
    console.log("Right!");
    answers.push(true);
    if (count + 1 != randomSymbols.length) {
      setNextSymbol();
    }
  };

  return (
    <SwapperView
      key={symbol}
      symb={symbol}
      onRight={() => onRight()}
      onWrong={() => onWrong()}
    />
  );
}
