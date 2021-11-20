import React from "react";

import Box from "./box";
import Text from "./text";
import Button from "./button";
import theme from "../utils/theme";
import { Clock } from "./icons";

export default function TimelineItem({ text, time }) {
  const { colors } = theme;
  return (
    <Button
      px={22}
      py={18}
      mt={4}
      bg={colors.black}
      borderRadius={15}
      flexDirection="column"
      alignItems="flex-start"
    >
      <Text fontSize={18} color={colors.white} fontWeight="bold">
        Design Tasks Detail
      </Text>
      <Box mt={10} flexDirection="row" alignItems="center">
        <Clock color={colors.gray} width={16} height={16} />
        <Text color={colors.gray} fontSize={14} ml={2}>
          08:30 - 09:30
        </Text>
      </Box>
    </Button>
  );
}
