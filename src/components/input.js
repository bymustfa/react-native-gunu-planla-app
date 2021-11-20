import React, { useState } from "react";
import { TextInput, useColorScheme } from "react-native";
import styled from "styled-components/native";
import Text from "./text";
import {
  compose,
  color,
  size,
  space,
  border,
  flexbox,
  borderRadius,
  position,
} from "styled-system";
import theme from "../utils/theme";

const InputStyle = styled(TextInput)(
  compose(flexbox, space, border, color, size, borderRadius, position)
);

InputStyle.defaultProps = {
  width: "100%",
  color: theme.colors.black,
  backgroundColor: theme.colors.lightGray,
  borderRadius: 8,
};

const Input = ({
  placeholder = "",
  value,
  onChangeText,
  height = 50,
  label = "",
  multiline = false,
  ...props
}) => {
  const colorScheme = useColorScheme();
  const { colors } = theme;

  const [border, setBorder] = useState("1px solid " + colors.lightGray2);

  return (
    <>
      {label.length > 0 && (
        <Text color={colors.lightBlack} mb={2}>
          {label}
        </Text>
      )}
      <InputStyle
        height={height}
        onChangeText={onChangeText}
        value={value}
        pl={3}
        pt={3}
        placeholder={placeholder}
        border={border}
        multiline={multiline}
        onFocus={() => setBorder("1px solid " + colors.gray)}
        onBlur={() => setBorder("1px solid " + colors.lightGray2)}
        style={{ textAlignVertical: "top" }}
        {...props}
      />
    </>
  );
};

export default Input;
