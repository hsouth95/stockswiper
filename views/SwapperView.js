import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight } from "react-native";

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

export default function SwapperView() {
  const onPressUp = () => {
    alert("You pressed up!!");
  };

  const onPressDown = () => {
    alert("You pressed down!!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Stock Swiper</Text>
      <Image
        style={styles.image}
        source={require("../assets/cisco.jpg")}
      />
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
  image: {
    height: 400,
    width: "100%",
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
  },
});
