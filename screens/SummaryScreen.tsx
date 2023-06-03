import {
  Button,
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

export default function SummaryScreen({ route, navigation }) {
  const { companies, answers } = route.params;

  companies.forEach((ele: { correctAnswer: number }, index: number) => {
    console.log(ele);
    ele.correctAnswer = answers[index];
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Finished!</Text>
      <Text style={styles.subTitle}>
        You got {answers.filter((x) => x).length} answers right.
      </Text>
      <View style={styles.listContainer}>
        <FlatList
          style={styles.list}
          data={companies}
          renderItem={({ item }) => (
            <View
              key={item.symbol}
              style={[
                styles.companyItem,
                item.correctAnswer ? styles.correctAnswer : styles.wrongAnswer,
              ]}
            >
              <Text style={styles.answerText}>
                {item.name} - {item.symbol}
              </Text>
              <Text style={styles.priceInfo}>
                {item.priceDifference < 0 ? "-" : ""}$
                {Math.abs(item.priceDifference.toFixed(3))}{" "}
                {item.percentageDifference.toFixed(3)}%
              </Text>
            </View>
          )}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Go Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 50,
    fontWeight: "bold",
    alignContent: "center",
  },
  subTitle: {
    fontSize: 32,
    fontWeight: "bold",
    alignContent: "center",
  },
  listContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  list: {
    flex: 1,
    width: "100%",
  },
  companyItem: {
    flex: 1,
    padding: 20,
    marginBottom: 10,
    width: "100%",
  },
  correctAnswer: {
    color: "green",
    borderColor: "green",
    backgroundColor: "green",
    borderWidth: 1,
  },
  wrongAnswer: {
    color: "red",
    borderColor: "red",
    backgroundColor: "red",
    borderWidth: 1,
  },
  answerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  priceInfo: {
    color: "white",
  },
  button: {
    backgroundColor: "#AAAAAA",
    width: "100%",
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
  },
});
