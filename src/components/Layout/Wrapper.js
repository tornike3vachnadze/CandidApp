import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";

const Wrapper = ({ children = () => React.Component(), spacing = 24 }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={[styles.container, { paddingHorizontal: spacing }]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
  },
});
