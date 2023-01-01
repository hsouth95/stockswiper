import SwapperView from "../views/SwapperView";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native-web";

const LAMBDA_URL = "https://lbn44tsfqvompigtorjt77w3ju0qcdzz.lambda-url.us-east-1.on.aws/";

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
];

const randomSymbols = [...POPULAR_SYMBOLS].sort(() => 0.5 - Math.random()).slice(0, 5);
console.log(randomSymbols);
let answers = [];
let companies = [];

export default function SwapperScreen({ navigation }) {
  const [count, setCount] = useState(0);
  const [symbol, setSymbol] = useState(randomSymbols[count]);
  const [company, setCompany] = useState(null);

  useEffect(() => {
    fetch(LAMBDA_URL, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        for (const symb of randomSymbols) {
          if (data[symb]) {
            const chosenCompany = data[symb][0];
            let open = chosenCompany.open;
            let close = chosenCompany.close;

            let valueDifference = open - close;
            let percentageDifference = valueDifference / close;

            let companyInfo = {
              key: symb,
              symbol: symb,
              priceDifference: valueDifference,
              percentageDifference: percentageDifference,
            };

            companies.push(companyInfo);
          }
        }

        setCompany(companies[0]);
      })
      .catch((e) => {
        console.error("Failed" + e);
      });
  }, []);

  const setNextSymbol = () => {
    let tempCount = count + 1;
    setCount(tempCount);

    setSymbol(randomSymbols[tempCount]);
    setCompany(companies[tempCount]);
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
  } else {
    return <ActivityIndicator size="large" />;
  }
}
