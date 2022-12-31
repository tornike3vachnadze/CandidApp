import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";
import CheckBox from "@react-native-community/checkbox";
import Container from "../../../components/Layout/Container";
import CText from "../../../components/Text/Text";
import fonts from "../../../utils/fonts";
import colors from "../../../utils/colors";
const Login = (props) => {
  const [input, setInput] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const login = () => {
    props.navigation.navigate("RecordBio", { title: "Why i love my pet..." });
    // props.navigation.navigate("Passcode");
  };
  return (
    <Container>
      <View style={{ flex: 1 }}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.signButton}
            onPress={() => props.navigation.navigate("SignUp")}
          >
            <CText style={styles.signText} type={"medium"}>
              Sign up
            </CText>
          </TouchableOpacity>
        </View>
        <View>
          <CText style={styles.title} type={"bold"}>
            Welcome Back
          </CText>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.logo}
            resizeMode={"contain"}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <CText style={styles.loginText} type={"bold"}>
          Login
        </CText>

        <CText style={styles.text} type="semi-bold">
          Continue with phone
        </CText>
        <View style={styles.inputContainer}>
          <Image
            source={require("../../../assets/atsign.png")}
            style={styles.atSign}
          />
          <TextInput
            onChangeText={(x) => setInput(x)}
            placeholder="Email ID/mobile number"
            style={styles.input}
            placeholderTextColor={"#979797"}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={checkbox}
            onValueChange={(x) => {
              setCheckbox(x);
            }}
            boxType={"square"}
            hideBox={false}
            style={styles.checkbox}
          />
          <View style={{ flexDirection: "row" }}>
            <CText style={styles.remember}>Accept </CText>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("PrivacyAndTerms", {
                  data: "privacy",
                })
              }
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: "#FFBCEC",
              }}
            >
              <CText style={styles.textStyle}> Privacy </CText>
            </TouchableOpacity>
            <CText style={styles.textStyle}> and </CText>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("PrivacyAndTerms", {
                  data: "terms",
                })
              }
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: "#FFBCEC",
              }}
            >
              <CText style={styles.textStyle}> Terms </CText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.cButton} onPress={login}>
            <CText style={styles.cText}>Continue</CText>
          </TouchableOpacity>
          <View style={styles.seprator}>
            <View style={styles.line} />
            <CText style={{ marginHorizontal: 24, color: "#ABABAB" }}>Or</CText>
            <View style={styles.line} />
          </View>
          <TouchableOpacity
            style={[
              styles.cButton,
              { backgroundColor: "#F0F0F0", borderColor: "#AAAAAA" },
            ]}
          >
            <Image
              style={styles.cLogo}
              source={require("../../../assets/apple.png")}
            />
            <CText style={styles.cText}>Continue with Apple</CText>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  signButton: {
    alignSelf: "flex-end",
  },
  signText: {
    color: colors.blue,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 28,
    paddingLeft: 8,

    color: "#888",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 100,
  },
  loginText: {
    fontSize: 22,
    color: "#4A4A4A",
  },
  text: {
    fontSize: 16,
    color: "#4A4A4A",
    marginTop: 18,
  },
  inputContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ABABAB",
    height: 60,
    alignItems: "center",
    marginBottom: 12,
    marginTop: 16,
  },
  atSign: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  input: {
    fontSize: 20,
    paddingHorizontal: 12,
    flex: 1,
    fontFamily: fonts.regular,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginVertical: 8,
  },
  checkbox: {
    width: 17,
    height: 17,
  },
  remember: {
    marginLeft: 16,
    color: "#979797",
  },
  footerContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 20,
  },
  cButton: {
    width: "100%",
    height: 42,
    borderRadius: 10,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FFBCEC",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  textStyle: {
    color: "#979797",
  },
  cText: {
    color: "#4A4A4A",
    fontWeight: "600",
    fontSize: 15,
  },
  seprator: {
    marginVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    backgroundColor: "#ABABAB",
    height: 1,
    flex: 1,
  },
  cLogo: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
});
