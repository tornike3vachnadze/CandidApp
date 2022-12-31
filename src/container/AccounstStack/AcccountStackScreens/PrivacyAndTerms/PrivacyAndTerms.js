import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Container from "../../../../components/Layout/Container";
import CText from "../../../../components/Text/Text";
import colors from "../../../../utils/colors";

const PrivacyAndTerms = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          paddingHorizontal: 24,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingBottom: 16,
          }}
        >
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <CText style={styles.textBlackColor}>Done</CText>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <CText type={"bold"} style={styles.headTitle}>
              Terms & Condition
            </CText>
            <CText type={"bold"} style={styles.title}>
              This is title
            </CText>
            <CText style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin. Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget. Dictum varius duis at consectetur lorem.
            </CText>
            <CText type={"bold"} style={styles.title}>
              This is title
            </CText>
            <CText style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin. Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget. Dictum varius duis at consectetur lorem.
            </CText>
            <CText style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin. Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget. Dictum varius duis at consectetur lorem.
            </CText>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PrivacyAndTerms;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: "white",
    marginTop: 5,
  },
  doneContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textBlackColor: {
    color: "#4A4A4A",
  },
  headTitle: {
    fontSize: 22,
    marginBottom: 20,
    marginTop: 10,
    alignSelf: "center",
    color: colors.black,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
  },
  text: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 20,
  },
});
