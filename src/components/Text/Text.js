import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CText = ({
  children,
  style = {},
  type = "regular" | "light" | "medium" | "bold" | "semi-bold",
}) => {
  const getType = (type) => {
    switch (type) {
      case "regular":
        return "Poppins-Regular";
      case "light":
        return "Poppins-Light";
      case "medium":
        return "Poppins-Medium";
      case "bold":
        return "Poppins-Bold";
      case "semi-bold":
        return "Poppins-SemiBold";
      default:
        return "Poppins-Regular";
    }
  };

  return <Text style={[{ fontFamily: getType(type) }, style]}>{children}</Text>;
};

export default CText;

const styles = StyleSheet.create({});
