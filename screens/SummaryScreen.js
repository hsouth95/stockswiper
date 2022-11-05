import { Button, SafeAreaView, Text, FlatList, StyleSheet, View } from "react-native";

export default function SummaryScreen({ route, navigation }) {
  const { companies, answers } = route.params;

  companies.forEach((ele, index) => {
    ele.correctAnswer = answers[index];
  });

  return (
    <SafeAreaView>
      <Text>Finished!</Text>
      <Text>You got {answers.filter((x) => x).length} answers right.</Text>
      <View style={styles.listContainer}>
        <FlatList
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
  listContainer: {
    flex: 1,
    paddingTop: 22,
  },
  correctAnswer: {
    color: "green",
  },
  wrongAnswer: {
    color: "red",
  },
});
