import { Button, SafeAreaView, Text, FlatList, StyleSheet, View } from "react-native";

export default function SummaryScreen({ route, navigation }) {
  const { companies, answers } = route.params;

  companies.forEach((ele, index) => {
    ele.correctAnswer = answers[index];
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Finished!</Text>
      <Text style={styles.subTitle}>You got {answers.filter((x) => x).length} answers right.</Text>
      <View style={styles.listContainer}>
        <FlatList
          style={styles.list}
          data={companies}
          renderItem={({ item }) => (
            <View style={[styles.companyItem, item.correctAnswer ? styles.correctAnswer : styles.wrongAnswer]}>
              <Text style={item.correctAnswer ? styles.correctAnswer : styles.wrongAnswer}>{item.symbol}</Text>
            </View>
          )}
        />
      </View>
      <Button onPress={() => navigation.navigate("Home")}>Go Home</Button>
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
    padding: 10,
    marginBottom: 10,
    backgroundColor: "gray",
    width: "100%",
  },
  correctAnswer: {
    color: "green",
    borderColor: "green",
    borderWidth: 1,
    fontSize: 50,
    fontWeight: "bold",
  },
  wrongAnswer: {
    color: "red",
    borderColor: "red",
    borderWidth: 1,
    fontSize: 50,
    fontWeight: "bold",
  },
});
