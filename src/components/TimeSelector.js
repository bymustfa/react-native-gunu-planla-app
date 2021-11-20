import React, { useState, useEffect } from "react";

import moment from "moment";
import "moment/min/locales";
moment.locale("tr");

import Box from "./box";
import Text from "./text";
import Button from "./button";
import theme from "../utils/theme";

import { ArrowDown, ArrowUp } from "./icons";

export default function TimeSelector({ selectedTime }) {
  const { colors } = theme;
  const [hour, setHour] = useState(parseInt(moment().format("HH")));
  const [minute, setMinute] = useState(parseInt(moment().format("mm")));

  useEffect(() => {
    selectedTime([hour, minute]);
  }, []);

  useEffect(() => {
    selectedTime([hour, minute]);
  }, [hour, minute]);

  return (
    <Box
      flexDirection="row"
      alingItems="center"
      justifyContent="space-between"
      px={4}
      py={2}
    >
      <Box>
        <Button
          onPress={() => {
            if (hour < 23) {
              setHour(hour + 1);
              selectedTime([hour, minute]);
            }
          }}
        >
          <Text textAlign="center">
            <ArrowUp color={colors.black} width={36} height={36} />
          </Text>
        </Button>

        <Text fontSize={24} textAlign="center">
          {hour < 10 ? "0" + hour : hour}
        </Text>

        <Button
          onPress={() => {
            if (hour > 0) {
              setHour(hour - 1);
              selectedTime([hour, minute]);
            }
          }}
        >
          <Text textAlign="center">
            <ArrowDown color={colors.black} width={36} height={36} />
          </Text>
        </Button>
      </Box>

      <Box justifyContent="center">
        <Text fontSize={32}>:</Text>
      </Box>
      <Box>
        <Button
          onPress={() => {
            if (minute < 59) {
              setMinute(minute + 1);
              selectedTime([hour, minute]);
            }
          }}
        >
          <Text textAlign="center">
            <ArrowUp color={colors.black} width={36} height={36} />
          </Text>
        </Button>
        <Text fontSize={24} textAlign="center">
          {minute < 10 ? "0" + minute : minute}
        </Text>
        <Button
          onPress={() => {
            if (minute > 0) {
              setMinute(minute - 1);
              selectedTime([hour, minute]);
            }
          }}
        >
          <Text textAlign="center">
            <ArrowDown color={colors.black} width={36} height={36} />
          </Text>
        </Button>
      </Box>
    </Box>
  );
}
