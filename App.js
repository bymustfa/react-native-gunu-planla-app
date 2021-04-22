import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeView from "./src/views/Home";

const Stack = createStackNavigator();

export default function App() {
  //  backgroundColor={theme.colors.black}
  return (
    <NavigationContainer>
      <StatusBar animated={true} barStyle="dark-content" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
