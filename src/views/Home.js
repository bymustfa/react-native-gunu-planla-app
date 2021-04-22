import { SafeAreaView } from "react-native";
import { Box, Text } from "../components";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function HomeView() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} bg="white" justifyContent="center" alignItems="center">
        <StatusBar style="auto" />
        <Text fontSize={32}>Deneme</Text>
      </Box>
    </SafeAreaView>
  );
}
