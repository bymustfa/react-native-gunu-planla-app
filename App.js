import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Text, Box } from "./src/components";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} bg="white" justifyContent="center" alignItems="center">
        <StatusBar style="auto" />
        <Text fontSize={32}>Deneme</Text>
      </Box>
    </SafeAreaView>
  );
}
