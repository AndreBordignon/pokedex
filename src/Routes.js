import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PokeFeed from "./pages/PokeFeed";
import PokemonDetail from "./pages/PokemonDetail";

const Stack = createStackNavigator();
function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={PokeFeed} />
        <Stack.Screen name="Details" component={PokemonDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
