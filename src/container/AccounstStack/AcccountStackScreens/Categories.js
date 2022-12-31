import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Wrapper from "../../../components/Layout/Wrapper";
import CText from "../../../components/Text/Text";
import TextButton from "../../../components/Button/TextButton";
import Pagination from "../../../components/Common/Pagination";
import colors from "../../../utils/colors";
import DatePicker from "react-native-date-picker";
import CustomButton from "../../../components/Button/CustomButton";
import Slider from "../../../components/Common/Slider";
import fonts from "../../../utils/fonts";

import search from "../../../assets/search.png";

const Categories = (props) => {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState(new Date());
  const [valueList, setValueList] = useState([]);
  const [interestList, setInterestList] = useState([]);
  const [goalList, setGoalList] = useState([]);

  const imgSource = [
    require("../../../assets/values.png"),
    require("../../../assets/interests.png"),
    require("../../../assets/goals.png"),
  ];

  const hashtags = [
    "#one",
    "#two",
    "#three",
    "#four",
    "#five",
    "#six",
    "#seven",
    "#eight",
    "#nine",
    "#ten",
  ];

  const addValues = (item) => {
    console.log(item);
    const list = valueList.map((lItem) => lItem == item);
    console.log(list);
    if (list[0]) {
    } else {
      setValueList((prev) => [...prev, item]);
    }
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => addValues(item)}>
        <CText>{index + 1 + ". " + item}</CText>
      </TouchableOpacity>
    );
  };

  const renderStep = (step) => {
    if (step == 0) {
      return (
        <View style={styles.wrapper} key={0}>
          <CText style={styles.ageTitle} type="bold">
            Values
          </CText>
          <CText style={{ marginTop: 16, fontSize: 15 }}>
            Choose up to 3 to match
          </CText>
          <View style={styles.listWrapper}>
            <View style={styles.searchContainer}>
              <TextInput
                placeholder="Search #values..."
                placeholderTextColor={colors.gray_3}
                style={styles.textInput}
              />
              <Image source={search} style={styles.searchIcon} />
            </View>
            <FlatList
              data={hashtags}
              extraData={hashtags}
              renderItem={renderItem}
              contentContainerStyle={{ padding: 10 }}
            />
            <View style={styles.choiceContainer}>
              {valueList.map((item, index) => (
                <TouchableOpacity key={"value" + index}>
                  <View style={styles.valueChoice}>
                    <Text>{item}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <CustomButton disabled={false} onPress={() => setStep((x) => x + 1)}>
            Next
          </CustomButton>
        </View>
      );
    } else if (step == 1) {
      return (
        <View style={styles.wrapper} key={0}>
          <CText style={styles.ageTitle} type="bold">
            Interests
          </CText>
          <CText style={{ marginTop: 16, fontSize: 15 }}>
            Choose up to 5 to match
          </CText>
          <View style={styles.listWrapper}>
            <View style={styles.searchContainer}>
              <TextInput
                placeholder="Search #values..."
                placeholderTextColor={colors.gray_3}
                style={styles.textInput}
              />
              <Image source={search} style={styles.searchIcon} />
            </View>
            <FlatList
              data={hashtags}
              extraData={hashtags}
              renderItem={renderItem}
              contentContainerStyle={{ padding: 10 }}
            />
            <View style={styles.choiceContainer}>
              {valueList.map((item, index) => (
                <TouchableOpacity key={"value" + index}>
                  <View style={styles.valueChoice}>
                    <Text>{item}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <CustomButton disabled={false} onPress={() => setStep((x) => x + 1)}>
            Next
          </CustomButton>
        </View>
      );
    } else if (step == 2) {
      return (
        <View style={styles.wrapper} key={0}>
          <CText style={styles.ageTitle} type="bold">
            Goals
          </CText>
          <CText style={{ marginTop: 16, fontSize: 15 }}>
            Choose up to 3 to match
          </CText>
          <View style={styles.listWrapper}>
            <View style={styles.searchContainer}>
              <TextInput
                placeholder="Search #values..."
                placeholderTextColor={colors.gray_3}
                style={styles.textInput}
              />
              <Image source={search} style={styles.searchIcon} />
            </View>
            <FlatList
              data={hashtags}
              extraData={hashtags}
              renderItem={renderItem}
              contentContainerStyle={{ padding: 10 }}
            />
            <View style={styles.choiceContainer}>
              {valueList.map((item, index) => (
                <TouchableOpacity key={"value" + index}>
                  <View style={styles.valueChoice}>
                    <Text>{item}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <CustomButton
            disabled={false}
            onPress={() => props.navigation.navigate("VideoBio")}
          >
            Next
          </CustomButton>
        </View>
      );
    }
  };
  return (
    <Wrapper>
      <View style={styles.headerContainer}>
        <TextButton
          style={styles.backBtn}
          onPress={() => {
            if (step == 0) {
              props.navigation.goBack();
            } else {
              setStep((x) => x - 1);
            }
          }}
        >
          Back
        </TextButton>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={imgSource[step]} style={styles.img} />
          <Pagination page={3} activeIndex={step} />
        </View>
        <View />
      </View>
      <View style={{ flex: 1 }}>{renderStep(step)}</View>
    </Wrapper>
  );
};

export default Categories;

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
    justifyContent: "flex-start",
  },
  listWrapper: {
    // alignItems: "center",
    flex: 1,
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 16,
    borderColor: colors.gray_2,
    borderWidth: 2,
    marginTop: 16,
    marginBottom: 16,
  },
  searchIcon: {
    width: 15,
    height: 15,
  },
  textInput: {
    flex: 1,
    fontFamily: fonts.medium,
  },
  item: {
    width: "100%",
    marginVertical: 10,
  },
  choiceContainer: {
    flexDirection: "row",
    paddingTop: 8,
    flexWrap: "wrap",
  },
  valueChoice: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.pink,
    marginRight: 10,
    backgroundColor: colors.gray_2,
    marginBottom: 10,
  },
});
