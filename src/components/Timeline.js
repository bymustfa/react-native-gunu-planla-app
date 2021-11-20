import React, { useRef } from "react";

import { FlatList } from "react-native";

import Text from "./text";
import Box from "./box";
import Button from "./button";
import TimelineItem from "./TimelineItem";
import TimelineTimeItem from "./TimelineTimeItem";

import { PlusCircle } from "./icons";

import times from "../utils/times.json";
import theme from "../utils/theme";

export default function Timeline({ selectedDate }) {
  const flatlistRef = useRef();
  const { colors } = theme;

  const renderItem = ({ item }) => {
    return (
      <>
        <Box flexDirection="row">
          <TimelineTimeItem item={item} />
          <Box p={2} flex={1}>
            {item.id === 1 || item.id === 2 ? (
              <Button
                px={22}
                py={18}
                mt={4}
                bg={colors.lightGray}
                borderRadius={15}
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Text color={colors.gray} fontSize={24} fontWight="bold" mr={2}>
                  Plan Ekle
                </Text>
                <PlusCircle color={colors.gray} />
              </Button>
            ) : (
              <TimelineItem />
            )}
          </Box>
        </Box>
        <Box height={2} width="100%" bg={colors.lightGray} />
      </>
    );
  };

  return (
    <Box mt={20}>
      <FlatList
        data={times}
        ref={flatlistRef}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
}
