import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import moment from "moment";
import "moment/min/locales";
moment.locale("tr");

import { Box, Text, HeaderLight, HeadDate, Timeline } from "../components";
import theme from "../utils/theme";

export default function HomeView() {
  const { colors } = theme;
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  console.log(selectedDate);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} bg="white" px={3} py={4}>
        <StatusBar style="auto" />
        <HeaderLight text="Günü Planla" subtitle="Bugün 4 adet görev var" />
        <HeadDate selected={selectedDate} setSelectedDate={setSelectedDate} />
        <Timeline selectedDate={selectedDate} />
      </Box>
    </SafeAreaView>
  );
}
