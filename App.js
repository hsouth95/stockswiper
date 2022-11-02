import SwapperView from "./views/SwapperView";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SwapperScreen from "./screens/SwapperScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteHome="Home">
        <Stack.Screen
          name="Home"
          component={SwapperScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
