import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Welcome to StockSwiper!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Swapper")}
        >
          <Text style={styles.buttonText}>Play!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // flexDirection: "column",
  },
  headerContainer: {
    flex: 2,
  },
  header: {
    flex: 1,
    fontSize: 50,
    marginTop: 100,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flex: 2,
    padding: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2ecc71",
  },
  buttonText: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
