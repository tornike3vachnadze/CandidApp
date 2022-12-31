import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";

const Container = ({
  children = () => React.Component(),
  spacing = 24,
  scrollEnabled,
}) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled={scrollEnabled}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
          <View style={[styles.container, { paddingHorizontal: spacing }]}>
            {children}
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
  },
});
