import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      {/* <View style={styles.container}> */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Welcome</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Swapper")}
        >
          <Text>Play!</Text>
        </TouchableOpacity>
      </View>
      {/* <Button onPress={() => navigation.navigate("Swapper")}>Play</Button> */}
      {/* </View> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  headerContainer: {
    width: "100%",
    height: 100,
  },
  header: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexGrow: 1,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    width: "100%",
    padding: 50,
  },
});
