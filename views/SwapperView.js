import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight } from "react-native";
import React, { useEffect, useState } from "react";
import yahooFinance from "yahoo-finance2";
import { useNavigation } from "@react-navigation/native";

export default function SwapperView({ company, onRight, onWrong }) {
  console.log("Rendering!");
  const [symbol, setSymbol] = useState(company?.symbol);
  const [priceDifference, setPriceDifference] = useState(company?.priceDifference);

  const onPressUp = () => {
    if (priceDifference < 0) {
      onWrong();
    } else {
      onRight();
    }
  };

  const onPressDown = () => {
    if (priceDifference > 0) {
      onWrong();
    } else {
      onRight();
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
    backgroundColor: "#FFF",
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    color: "#000",
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
    backgroundColor: "#2ecc71",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  downButton: {
    backgroundColor: "#e74c3c",
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
