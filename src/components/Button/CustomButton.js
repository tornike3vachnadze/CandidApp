import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CText from "../Text/Text";
import colors from "../../utils/colors";
const CustomButton = (props) => {
  const { children, disabled, style } = props;
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.7}
      style={[styles.default, disabled ? styles.disableBtn : {}, style]}
    >
      <CText
        type={"semi-bold"}
        style={[styles.text, disabled ? styles.textDisable : {}]}
      >
        {children}
      </CText>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  default: {
    width: "100%",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.pink,
    borderRadius: 20,
    elevation: 2,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
  },
  text: {
    color: colors.darkGray,
  },
  textDisable: {
    color: colors.lightGray,
  },
  disableBtn: {
    borderColor: "#aaa",
  },
});
