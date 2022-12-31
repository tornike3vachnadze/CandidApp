import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";
import CheckBox from "@react-native-community/checkbox";
import Container from "../../../components/Layout/Container";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [phone, setPhone] = useState("");

  const [checkbox, setCheckbox] = useState(false);

  const goToUserInfo = () => {
    props.navigation.navigate("UserInfo");
  };

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            style={styles.signButton}
            onPress={() => props.navigation.navigate("Login")}
          />
        </View>
        <View>
          <Text style={styles.title}>Welcome</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.logo}
            resizeMode={"contain"}
          />
        </View>
      </View>
      <View style={{ flex: 1.3 }}>
        <Text style={styles.signText}>Signup</Text>
        {/* email */}
        <View style={styles.inputContainer}>
          <Image
            source={require("../../../assets/atsign.png")}
            style={styles.atSign}
          />
          <TextInput
            onChangeText={(x) => setEmail(x)}
            placeholder="Email ID"
            style={styles.input}
            placeholderTextColor={"#979797"}
            defaultValue={email}
          />
        </View>
        {/* firstname */}
        <View style={styles.inputContainer}>
          <Image
            source={require("../../../assets/user.png")}
            style={styles.atSign}
          />
          <TextInput
            onChangeText={(x) => setFirstname(x)}
            placeholder="First name"
            style={styles.input}
            placeholderTextColor={"#979797"}
            defaultValue={firstname}
          />
        </View>
        {/* mobile */}
        <View style={styles.inputContainer}>
          <Image
            source={require("../../../assets/mobile.png")}
            style={styles.atSign}
          />
          <TextInput
            onChangeText={(x) => setPhone(x)}
            placeholder="Mobile number"
            style={styles.input}
            placeholderTextColor={"#979797"}
            defaultValue={phone}
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
            <Text style={styles.remember}>Accept </Text>
            <TouchableOpacity
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: "#FFBCEC",
              }}
            >
              <Text style={styles.textStyle}> Privacy </Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}> and </Text>
            <TouchableOpacity
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: "#FFBCEC",
              }}
            >
              <Text style={styles.textStyle}> Terms </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.cButton} onPress={goToUserInfo}>
            <Text style={styles.cText}>Continue</Text>
          </TouchableOpacity>
          <View style={styles.seprator}>
            <View style={styles.line} />
            <Text style={{ marginHorizontal: 24, color: "#ABABAB" }}>Or</Text>
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
            <Text style={styles.cText}>Continue with Apple</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: "white",
  },
  signButton: {
    alignSelf: "flex-end",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 28,
    paddingLeft: 8,
    fontWeight: "bold",
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
    marginTop: 60,
  },
  signText: {
    fontSize: 22,
    color: "#4A4A4A",
    fontWeight: "800",
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: "#4A4A4A",
    marginTop: 18,
    fontWeight: "600",
  },
  inputContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ABABAB",

    alignItems: "center",
    marginBottom: 12,
    marginTop: 16,
    paddingBottom: 12,
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
  textStyle: {
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
