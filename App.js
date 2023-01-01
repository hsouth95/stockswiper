import HomeScreen from "./screens/HomeScreen";
import SummaryScreen from "./screens/SummaryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SwapperScreen from "./screens/SwapperScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initalRouteHome="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Swapper"
          component={SwapperScreen}
        />
        <Stack.Screen
          name="Summary"
          component={SummaryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
