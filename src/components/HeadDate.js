import React, { useRef, useEffect, useState } from "react";
import { FlatList } from "react-native";

import Box from "./box";
import Text from "./text";
import Button from "./button";

import moment from "moment";
import "moment/min/locales";
moment.locale("tr");

import theme from "../utils/theme";

export default function HeadDate({
  selected = moment().format("YYYY-MM-DD"),
  setSelectedDate,
}) {
  const { colors } = theme;
  const flatlistRef = useRef();
  const [daysOfYear, setDaysOfYear] = useState([]);

  useEffect(() => {
    let tmpIndex = 0;
    let tmpDays = [];
    for (
      let d = new Date(moment().add(-1, "days"));
      d <= moment().add(10, "days")._d;
      d.setDate(d.getDate() + 1)
    ) {
      tmpDays.push({
        id: Math.ceil(Math.random() * 9999),
        index: tmpIndex,
        date: moment(d).format("YYYY-MM-DD"),
        dayNum: moment(new Date(d)).format("ddd"),
        dayStr: moment(new Date(d)).format("DD"),
      });
      tmpIndex++;
    }

    setDaysOfYear(tmpDays);
  }, []);

  const renderItem = ({ item }) => (
    <Button
      bg={item.date === selected ? colors.lightGray : colors.white}
      borderRadius={20}
      px={18}
      py={23}
      flexDirection="column"
      alignItems="center"
      onPress={() => setSelectedDate(item.date)}
    >
      <Text fontSize={12} color={colors.gray}>
        {item.dayNum}
      </Text>
      <Text fontSize={24} fontWeight="bold" color={colors.lightBlack}>
        {item.dayStr}
      </Text>
    </Button>
  );

  useEffect(() => {
    if (daysOfYear.length > 0) {
      let obj = daysOfYear.find((x) => x.date === selected);
      let index = obj.index > 0 ? obj.index - 1 : obj.index;
      flatlistRef.current.scrollToIndex({
        animated: true,
        index: index,
      });
    }
  }, [selected]);

  return (
    <Box mt={25} height={100}>
      <FlatList
        data={daysOfYear}
        ref={flatlistRef}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </Box>
  );
}
