import React, { useRef } from "react";
import { Box, Text, Button } from "../components";

import { Grid, Plus, Settings } from "../components/icons";

import theme from "../utils/theme";

export const TabBar = ({
  state,
  descriptors,
  navigation,
  newAddModal,
  ...props
}) => {
  const { colors } = theme;
  return (
    <Box flexDirection="row" justifyContent="space-around" p={2}>
      <Button
        p={2}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Grid color={state.index === 0 ? colors.black : colors.gray} />
      </Button>

      <Box width={150} alignItems="center">
        <Button
          p={2}
          borderRadius={50}
          bg={colors.black}
          size={56}
          onPress={() => newAddModal()}
        >
          <Plus color={colors.white} />
        </Button>
      </Box>

      <Button
        p={2}
        onPress={() => {
          navigation.navigate("Settings");
        }}
      >
        <Settings color={state.index === 1 ? colors.black : colors.gray} />
      </Button>
    </Box>
  );
};
