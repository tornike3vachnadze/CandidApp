import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import colors from "../../../utils/colors";
import Video from "react-native-video";
import CText from "../../../components/Text/Text";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import fonts from "../../../utils/fonts";
const { width, height } = Dimensions.get("screen");
import StrokeText from "../../../components/Text/StrokeText";

const VideoSample = (props) => {
  const { title } = props.route.params;
  const safeArea = useSafeAreaInsets();
  const uri = "https://www.aparat.com/v/WDXqb";

  return (
    <View style={styles.container}>
      <Video style={styles.video}></Video>
      {/* <StrokeText
        width={width}
        height={80}
        dy={0}
        style={{
          fontSize: 26,
          fontFamily: fonts.bold,
          fontWeight: "bold",
          top: safeArea.top + 48,
          position: "absolute",
          alignSelf:'center'
        }}
        strokeWidth={2}
      >
        {title}
      </StrokeText> */}
      <CText
        style={[styles.title, { position: "absolute", top: safeArea.top + 48 }]}
      >
        {title}
      </CText>
      <View style={styles.overlay}>
        <CText style={styles.overText}>
          {"Videos can be up to 45\nseconds"}
        </CText>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => props.navigation.goBack()}
        >
          <CText style={styles.btnText}>Done</CText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VideoSample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  title: {
    fontSize: 23,
    fontFamily: fonts.bold,
    color: colors.white,
    alignSelf: "center",
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    textAlign: "center",
  },
  video: {
    width,
    height,
    backgroundColor: "green",
    flex: 1,
  },
  overlay: {
    position: "absolute",
    bottom: -1,
    left: 0,
    right: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: height / 3,
    width: width,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderColor: colors.white,
    borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  overText: {
    fontSize: 19,
    textAlign: "center",
    color: colors.gray_5,
  },
  btn: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: colors.gray_5,
    backgroundColor: colors.white,
    borderRadius: 30,
    marginTop: 20,
  },
  btnText: {
    fontFamily: fonts.medium,
    color: colors.gray_5,
  },
});
