import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import moment from "moment";
import "moment/min/locales";
moment.locale("tr");

import { Box, Text, HeaderLight, HeadDate, Timeline } from "../components";
import theme from "../utils/theme";

export default function SettingsView() {
  const { colors } = theme;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} bg="white" px={3} py={4}>
        <Text>Setitngs</Text>
      </Box>
    </SafeAreaView>
  );
}
