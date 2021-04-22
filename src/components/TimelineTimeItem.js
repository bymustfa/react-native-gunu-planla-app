import React from "react";
import Box from "./box";
import Text from "./text";

import theme from "../utils/theme";

export default function TimelineTimeItem({ item }) {
  const { colors } = theme;
  return (
    <Box mr={3}>
      <Box
        height={80}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Text color={colors.gray}>{item.start}</Text>
      </Box>
      <Box width="100%" height={1} bg={colors.gray} />
      <Box
        height={80}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Text color={colors.gray}>{item.end}</Text>
      </Box>
    </Box>
  );
}
