import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import * as SecureStore from "expo-secure-store";
import { TouchableOpacity } from "react-native";
import { useEffect } from "react";

export default function HomeScreen({ navigation }) {
  let completed = false;
  useEffect(() => {
    if (Platform.OS !== "web") {
      SecureStore.getItemAsync(new Date().toLocaleDateString().replaceAll("/", "-")).then((item) => {
        if (item) {
          completed = true;
        }
      });
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Welcome to StockSwiper!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Swapper")}
          disabled={completed}
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
