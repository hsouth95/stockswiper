import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Stock Swiper</Text>
      <Image
        style={styles.image}
        source={require("./assets/cisco.jpg")}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.downButton}>
          <Text style={styles.buttonText}>Down</Text>
        </View>
        <View style={styles.upButton}>
          <Text style={styles.buttonText}>Up</Text>
        </View>
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
    padding: 0,
    justifyContent: "center",
  },
  upButton: {
    backgroundColor: "green",
    justifyContent: "center",
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
