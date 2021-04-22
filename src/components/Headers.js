import React from "react";

import Text from "./text";
import Box from "./box";

import theme from "../utils/theme";

export default function HeaderLight({ text, subtitle }) {
  const { colors } = theme;
  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between">
      <Box>
        <Text fontSize={26} fontWeight="bold" color={colors.lightBlack}>
          {text}
        </Text>
        <Text fontSize={17} color={colors.gray}>
          {subtitle}
        </Text>
      </Box>
      <Box
        size={50}
        bg={colors.lightBlack}
        borderRadius={15}
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
      >
        <Text fontSize={30} color={colors.white} fontWeight="bold">
          M
        </Text>
      </Box>
    </Box>
  );
}
