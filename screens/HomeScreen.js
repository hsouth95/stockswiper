import { Button, SafeAreaView, Text } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Welcome</Text>
      <Button onPress={() => navigation.navigate("Swapper")}>Play</Button>
    </SafeAreaView>
  );
}
