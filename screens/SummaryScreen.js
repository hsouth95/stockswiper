import { Button, SafeAreaView, Text } from "react-native";

export default function SummaryScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Finished!</Text>
      <Button onPress={() => navigation.navigate("Home")}>Play</Button>
    </SafeAreaView>
  );
}
