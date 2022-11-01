import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight } from "react-native";
import React, { useEffect, useState } from "react";
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

export default function SwapperView(props) {
  const [symbol, setSymbol] = useState(props.symbol);
  const [priceDifference, setPriceDifference] = useState(0);

  const onPressUp = () => {
    if (priceDifference < 0) {
      alert("Wrong");
    } else {
      alert("Right!");
    }
  };

  const onPressDown = () => {
    if (priceDifference > 0) {
      alert("Wrong");
    } else {
      alert("Right!");
    }
  };

  useEffect(() => {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    yahooFinance
      .historical(symbol, {
        period1: yesterday,
        interval: "1d",
      })
      .then((quotes) => {
        let open = quotes[0].open;
        let close = quotes[0].close;

        let valueDifference = open - close;
        let percentageDifference = valueDifference / close;

        setPriceDifference(percentageDifference);
      });
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{symbol}</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={`https://companiesmarketcap.com/img/company-logos/256/${symbol}.webp`}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          onPress={onPressDown}
          style={styles.downButton}
        >
          <Text style={styles.buttonText}>Down</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={onPressUp}
          style={styles.upButton}
        >
          <Text style={styles.buttonText}>Up</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    paddingBottom: 10,
    paddingTop: 10,
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "contain",
    paddingBottom: 10,
    paddingTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  upButton: {
    backgroundColor: "green",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  downButton: {
    backgroundColor: "red",
    justifyContent: "center",
    flex: 1,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
  },
});
