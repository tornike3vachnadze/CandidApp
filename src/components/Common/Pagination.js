import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../utils/colors";

const Pagination = (props) => {
  const { page = 5, activeIndex = 0 } = props;
  return (
    <View style={styles.container}>
      {[...Array(page).keys()].map((_, index) => (
        <View
          key={`p-${index}_`}
          style={[
            styles.circle,
            {
              opacity: index == activeIndex ? 1 : 0.3,
            },
          ]}
        />
      ))}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: colors.pink,
  },
});
