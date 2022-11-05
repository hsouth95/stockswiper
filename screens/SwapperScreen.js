import SwapperView from "../views/SwapperView";
import { useEffect, useState } from "react";

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
let companies = [];

export default function SwapperScreen({ navigation }) {
  const [count, setCount] = useState(0);
  const [symbol, setSymbol] = useState(randomSymbols[count]);
  const [company, setCompany] = useState(null);

  // TODO: Implement hook for count changing
  // useEffect(() => {

  // }, [count]);

  useEffect(() => {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    yahooFinance
      .historical(symbol, {
        period1: yesterday,
        interval: "1d",
      })
      .then((quotes) => {
        console.log("Here");
        let open = quotes[0].open;
        let close = quotes[0].close;

        let valueDifference = open - close;
        let percentageDifference = valueDifference / close;

        let companyInfo = {
          key: symbol,
          symbol: symbol,
          priceDifference: valueDifference,
          percentageDifference: percentageDifference,
        };
        setCompany(companyInfo);
        companies.push(companyInfo);
        // setPriceDifference(percentageDifference);
      });
  }, [symbol]);

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
    } else {
      navigation.navigate("Summary", {
        companies: companies,
        answers: answers,
      });
    }
  };
  const onRight = () => {
    console.log("Right!");
    answers.push(true);
    if (count + 1 != randomSymbols.length) {
      setNextSymbol();
    } else {
      navigation.navigate("Summary", {
        companies: companies,
        answers: answers,
      });
    }
  };
  if (company) {
    return (
      <SwapperView
        key={company.symbol}
        company={company}
        onRight={() => onRight()}
        onWrong={() => onWrong()}
      />
    );
  }
}
