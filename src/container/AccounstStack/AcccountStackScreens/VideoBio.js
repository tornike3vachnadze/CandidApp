import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Container from "../../../components/Layout/Container";
import TextButton from "../../../components/Button/TextButton";
import CText from "../../../components/Text/Text";
import colors from "../../../utils/colors";
import Wrapper from "../../../components/Layout/Wrapper";
import CustomButton from "../../../components/Button/CustomButton";

const text = [
  {
    img: require("../../../assets/fish.png"),
    title: "Why I love my pet",
  },
  {
    img: require("../../../assets/face.png"),
    title: "A weird thing about me",
  },
  {
    img: require("../../../assets/bowling.png"),
    title: "My weekends look like",
  },
  {
    img: require("../../../assets/flower.png"),
    title: "Our first date",
  },
  {
    img: require("../../../assets/boat.png"),
    title: "Our first date",
  },
  {
    img: require("../../../assets/rocket.png"),
    title: "My aspirations",
  },
  {
    img: require("../../../assets/dice.png"),
    title: "Freestyle (talk about anything)",
  },
];

const VideoBio = (props) => {
  const [itemIndex, setItemIndex] = useState(0);
  const [list, setList] = useState(text);

  const Item = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setItemIndex(index)}
        key={`item-${index}`}
      >
        <View style={styles.itemContainer}>
          <View
            style={[styles.circle, index == itemIndex ? styles.fillCircle : {}]}
          />

          <View style={styles.imgContainer}>
            <Image source={item.img} style={styles.itemImg} />
          </View>
          <CText style={styles.itemText}>{item.title}</CText>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Wrapper>
      <View style={styles.headerContainer}>
        <TextButton
          style={styles.backBtn}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          Back
        </TextButton>

        <View />
      </View>
      <View>
        <CText style={styles.Title} type="bold">
          Goals
        </CText>
        <CText style={styles.subtitle}>
          Required for authentication* Make a short video about one of these
          prompts
        </CText>
        <ScrollView style={{ flexGrow: 1 }}>
          {list.map((item, index) => (
            <Item item={item} index={index} />
          ))}
        </ScrollView>
        <CustomButton
          disabled={false}
          onPress={() =>
            props.navigation.navigate("VideoSample", {
              title: list[itemIndex].title,
            })
          }
          style={{
            marginBottom: 16,
            marginTop: 16,
            backgroundColor: colors.pink3,
          }}
        >
          Watch sample
        </CustomButton>
        <CustomButton
          disabled={false}
          onPress={() => props.navigation.navigate("RecordBio")}
        >
          Record
        </CustomButton>
      </View>
    </Wrapper>
  );
};

export default VideoBio;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 16,
  },

  Title: {
    fontSize: 22,
    color: colors.darkGray,
    marginTop: 16,
  },
  subtitle: {
    marginTop: 16,
    fontSize: 15,
    color: colors.darkGray,
    marginBottom: 32,
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center",
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray_1,
    backgroundColor: colors.white,
  },
  fillCircle: {
    borderColor: colors.lightPink,
    backgroundColor: colors.lightPink,
  },
  imgContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    elevation: 1,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: colors.pink3,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  itemImg: {
    width: 30,
    height: 30,
  },
  itemText: {
    fontSize: 15,
    color: colors.gray_5,
    textShadowColor: colors.gray_0,
    textShadowRadius: 2,
    textShadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
