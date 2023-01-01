import SwapperView from "../views/SwapperView";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const LAMBDA_URL = "https://lbn44tsfqvompigtorjt77w3ju0qcdzz.lambda-url.us-east-1.on.aws/";

interface Company {
  name: string;
  symbol: string;
  priceDifference: number;
  percentageDifference: number;
}

const POPULAR_COMPANIES: { name: string; symbol: string }[] = [
  { name: "Apple", symbol: "AAPL" },
  { name: "Microsoft", symbol: "MSFT" },
  { name: "Alphabet Inc", symbol: "GOOG" },
  { name: "Amazon", symbol: "AMZN" },
  { name: "Tesla", symbol: "TSLA" },
  { name: "Berkshire Hathaway Inc", symbol: "BRK-B" },
  { name: "Exxon Mobil", symbol: "XOM" },
  { name: "Visa", symbol: "V" },
  { name: "Walmart", symbol: "WMT" },
  { name: "NVIDIA", symbol: "NVDA" },
  { name: "Pfizer", symbol: "PFE" },
  { name: "Coca-Cola", symbol: "KO" },
  { name: "Meta", symbol: "META" },
  { name: "PepsiCo", symbol: "PEP" },
  { name: "Shell", symbol: "SHEL" },
  { name: "McDonald's", symbol: "MCD" },
  { name: "Walt Disney", symbol: "DIS" },
  { name: "Cisco", symbol: "CSCO" },
  { name: "Accenture", symbol: "ACN" },
  { name: "Salesforce", symbol: "CRM" },
  { name: "Adobe", symbol: "ADBE" },
];

const randomSymbols = [...POPULAR_COMPANIES].sort(() => 0.5 - Math.random()).slice(0, 5);
console.log(randomSymbols);
let answers: boolean[] = [];
let companies: Company[] = [];

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
        for (const company of randomSymbols) {
          if (data[company.symbol]) {
            const chosenCompany = data[company.symbol][0];
            let open = chosenCompany.open;
            let close = chosenCompany.close;

            let valueDifference = open - close;
            let percentageDifference = valueDifference / close;

            let companyInfo: Company = {
              symbol: company.symbol,
              name: company.name,
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
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
