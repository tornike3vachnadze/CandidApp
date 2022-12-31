import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Container from "../../../components/Layout/Container";
import CText from "../../../components/Text/Text";
import colors from "../../../utils/colors";
import fonts from "../../../utils/fonts";
import { View } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import TextButton from "../../../components/Button/TextButton";
const Passcode = () => {
  const [code, setCode] = useState("");
  const handleSubmit = (code) => {};
  return (
    <Container spacing={32}>
      <CText type={"semi-bold"} style={styles.title}>
        Verify login
      </CText>
      <CText style={styles.passcode} type="bold">
        Passcode
      </CText>
      <CText style={styles.subtitle} type="medium">
        Enter the 4 digit code sent to you via SMS
      </CText>

      <View
        style={{ paddingHorizontal: 32, paddingTop: 32, alignItems: "center" }}
      >
        <OTPInputView
          pinCount={4}
          style={{ width: "100%", height: 100 }}
          autoFocusOnLoad
          onCodeChanged={(code) => {
            setCode(code);
          }}
          codeInputFieldStyle={[
            {
              width: 45,
              height: 53,
              borderRadius: 5,
              elevation: 2,
              backgroundColor: colors.white,
              borderColor: colors.lightGray,
              shadowColor: colors.black,
              shadowOpacity: 0.2,
              shadowRadius: 2,
              shadowOffset: { width: 0, height: 2 },
              fontSize: 20,
              fontFamily: fonts.bold,
              color: colors.darkGray,
            },
          ]}
          editable={true}
          codeInputHighlightStyle={styles.otpInput}
          onCodeFilled={(code) => {
            handleSubmit(code);
          }}
        />
        <TextButton
          type="medium"
          textStyle={{ color: colors.darkGray }}
          style={{ marginTop: 20 }}
        >
          Re-send Code
        </TextButton>
        <TextButton
          type="medium"
          textStyle={{ color: colors.darkGray }}
          style={{ marginTop: 20 }}
        >
          Done
        </TextButton>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  title: {
    color: colors.lightGray,
    fontSize: 26,
    marginTop: 24,
  },
  passcode: {
    marginTop: 48,
    fontSize: 22,
    color: colors.darkGray,
  },
  subtitle: {
    fontSize: 15,
    color: colors.lightGray,
    marginTop: 12,
  },
  container2: {},
  otpInput: {
    width: 45,
    height: 50,
    borderRadius: 5,
    fontSize: 20,
    fontFamily: fonts.bold,
    color: colors.darkGray,
  },
});
export default Passcode;
