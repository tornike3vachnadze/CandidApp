import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CText from "../Text/Text";

const TextButton = (props) => {
  const { children, textStyle, type, activeOpacity = 0.8 } = props;
  return (
    <TouchableOpacity {...props} activeOpacity={activeOpacity}>
      <CText style={textStyle} type={type}>
        {children}
      </CText>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({});
