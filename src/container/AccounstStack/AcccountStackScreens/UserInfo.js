import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Container from "../../../components/Layout/Container";
import CText from "../../../components/Text/Text";
import TextButton from "../../../components/Button/TextButton";
import Pagination from "../../../components/Common/Pagination";
import colors from "../../../utils/colors";
import DatePicker from "react-native-date-picker";
import CustomButton from "../../../components/Button/CustomButton";
import Slider from "../../../components/Common/Slider";
import fonts from "../../../utils/fonts";

const UserInfo = (props) => {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState(new Date());
  const [userHeight, setUserHeight] = useState(0);
  const [educationSelectIndex, setEducationSelectIndex] = useState(null);
  const [genderSelectIndex, setGenderSelectIndex] = useState(null);
  const [interestedIndex, setInterestedIndex] = useState(null);
  const imgSource = [
    require("../../../assets/ballon.png"),
    require("../../../assets/height.png"),
    require("../../../assets/education.png"),
    require("../../../assets/education.png"),
    require("../../../assets/gender.png"),
    require("../../../assets/heart.png"),
    require("../../../assets/shirt.png"),
  ];
  const education = [
    "High School",
    "Trade/tech school",
    "College (undergraduate)",
    "In grad school",
    "Graduate degree",
  ];
  const gender = [
    "I am a woman",
    "I am a man",
    "I am transgender",
    "I am non-binary",
  ];
  const interestedIn = ["Women", "Men", "Non-binary people", "Everyone"];
  const renderStep = (step) => {
    if (step == 0) {
      return (
        <View style={styles.wrapper} key={"0"}>
          <CText style={styles.ageTitle} type="bold">
            What’s your age?
          </CText>
          <View style={styles.dateWrapper}>
            <CText style={styles.age} type="semi-bold">
              Age1
            </CText>
            <DatePicker mode={"date"} date={date} onDateChange={setDate} />
          </View>
          <CustomButton disabled={false} onPress={() => setStep((x) => x + 1)}>
            Next
          </CustomButton>
        </View>
      );
    } else if (step == 1) {
      return (
        <View style={styles.wrapper} key={"1"}>
          <CText style={styles.ageTitle} type="bold">
            What’s your height?
          </CText>
          <View style={[styles.heightWrapper]}>
            <Image
              source={require("../../../assets/topHeight.png")}
              style={styles.heightImg}
            />

            <View style={{ flex: 1 }}>
              <Slider
                onChangeValue={(value) => {
                  setUserHeight(value);
                }}
                min={122}
                max={207}
                step={1}
              />
            </View>

            <Image
              source={require("../../../assets/lowHeight.png")}
              style={styles.heightImg}
            />
          </View>
          <CustomButton disabled={false} onPress={() => setStep((x) => x + 1)}>
            Next
          </CustomButton>
        </View>
      );
    } else if (step == 2) {
      return (
        <View style={styles.wrapper} key={"2"}>
          <CText style={[styles.ageTitle]} type="bold">
            {"What is your highest\nlevel of education?"}
          </CText>
          <CText style={{ marginTop: 16, fontSize: 17 }}>
            Choose if attending or completed.
          </CText>
          <View
            style={[
              styles.heightWrapper,
              { justifyContent: "flex-start", paddingTop: 32 },
            ]}
          >
            {education.map((item, index) => (
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.Item,
                  {
                    backgroundColor:
                      educationSelectIndex == index
                        ? colors.gray_1
                        : colors.white,
                  },
                ]}
                onPress={() => setEducationSelectIndex(index)}
              >
                <CText>{item}</CText>
              </TouchableOpacity>
            ))}
          </View>
          <CustomButton disabled={false} onPress={() => setStep((x) => x + 1)}>
            Next
          </CustomButton>
        </View>
      );
    } else if (step == 3) {
      return (
        <View style={styles.wrapper} key={"3"}>
          <CText style={[styles.ageTitle]} type="bold">
            {"Please find your college\nhere"}
          </CText>

          <View
            style={[
              styles.heightWrapper,
              { justifyContent: "flex-start", paddingTop: 32 },
            ]}
          >
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Search"
                style={styles.input}
                placeholderTextColor={"#979797"}
              />
            </View>
          </View>
          <CustomButton disabled={false} onPress={() => setStep((x) => x + 1)}>
            Next
          </CustomButton>
        </View>
      );
    } else if (step == 4) {
      return (
        <View style={styles.wrapper} key={"4"}>
          <CText style={[styles.ageTitle]} type="bold">
            {"What is your gender?"}
          </CText>
          <CText style={{ marginTop: 16, fontSize: 17 }}>
            Your gender will not be displayed
          </CText>
          <View
            style={[
              styles.heightWrapper,
              { justifyContent: "flex-start", paddingTop: 32 },
            ]}
          >
            {gender.map((item, index) => (
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.Item,
                  {
                    backgroundColor:
                      genderSelectIndex == index ? colors.gray_1 : colors.white,
                  },
                ]}
                onPress={() => setGenderSelectIndex(index)}
              >
                <CText>{item}</CText>
              </TouchableOpacity>
            ))}
            <TextButton
              textStyle={{ fontFamily: fonts.bold, fontSize: 12 }}
              style={{ marginTop: 20 }}
              onPress={() => console.log("pressed")}
            >
              more gender options
            </TextButton>
          </View>
          <CustomButton disabled={false} onPress={() => setStep((x) => x + 1)}>
            Next
          </CustomButton>
        </View>
      );
    } else if (step == 5) {
      return (
        <View style={styles.wrapper} key={"5"}>
          <CText style={[styles.ageTitle]} type="bold">
            {"Who are you looking for?"}
          </CText>
          <CText style={{ marginTop: 16, fontSize: 16 }}>
            {"Choose who you’re most interested in."}
          </CText>
          <View
            style={[
              styles.heightWrapper,
              { justifyContent: "flex-start", paddingTop: 32 },
            ]}
          >
            {interestedIn.map((item, index) => (
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.Item,
                  {
                    backgroundColor:
                      interestedIndex == index ? colors.gray_1 : colors.white,
                  },
                ]}
                onPress={() => setInterestedIndex(index)}
              >
                <CText>{item}</CText>
              </TouchableOpacity>
            ))}
          </View>
          <CustomButton disabled={false} onPress={() => setStep((x) => x + 1)}>
            Next
          </CustomButton>
        </View>
      );
    } else if (step == 6) {
      return (
        <View style={styles.wrapper} key={"6"}>
          <CText style={[styles.ageTitle]} type="bold">
            {"What do you do for\nwork?"}
          </CText>

          <View
            style={[
              styles.heightWrapper,
              { justifyContent: "flex-start", paddingTop: 32 },
            ]}
          >
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Type the name of your work here..."
                style={styles.input}
                placeholderTextColor={"#979797"}
              />
            </View>
          </View>
          <CustomButton
            // disabled={}
            onPress={() => props.navigation.navigate("Categories")}
            style={{ marginBottom: 24 }}
          >
            Skip
          </CustomButton>
          <CustomButton disabled={true} onPress={() => setStep((x) => x + 1)}>
            Next
          </CustomButton>
        </View>
      );
    }
  };
  return (
    <Container>
      <View style={styles.headerContainer}>
        {step != 0 ? (
          <TextButton
            style={styles.backBtn}
            onPress={() => setStep((x) => x - 1)}
          >
            Back
          </TextButton>
        ) : null}

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={imgSource[step]} style={styles.img} />
          <Pagination page={7} activeIndex={step} />
        </View>
        <View />
      </View>
      <View style={{ flex: 1 }}>{renderStep(step)}</View>
    </Container>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 16,
  },
  backBtn: {},
  img: {
    width: 40,
    height: 40,
    marginRight: 5,
    borderRadius: 20,
    elevation: 2,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  ageTitle: {
    fontSize: 22,
    color: colors.darkGray,
  },
  wrapper: {
    flex: 1,
    paddingVertical: 32,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  dateWrapper: {
    alignItems: "center",
  },
  heightWrapper: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 16,
    justifyContent: "space-between",
  },
  age: {
    fontSize: 20,
    color: colors.darkGray,
    marginBottom: 32,
  },
  heightImg: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  Item: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderColor: colors.gray_0,
    borderWidth: 1,
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

  input: {
    fontSize: 16,
    paddingHorizontal: 0,
    flex: 1,
    fontFamily: fonts.medium,
  },
});
