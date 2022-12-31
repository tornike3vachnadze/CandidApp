import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import colors from "../../utils/colors";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  event,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import CText from "../Text/Text";
const THUMB_SIZE = 30;
const converToFeet = (height) => {
  var WholeFeet = Math.floor(height / 30.48);
  var Inches = (height / 30.48 - WholeFeet) * 12;
  return `${WholeFeet}' ${Math.floor(Inches)}`;
};
const Slider = ({ min, max, step, onChangeValue = () => {} }) => {
  const position = useSharedValue(0);
  const [sliderHeight, setSliderHeight] = useState(0);
  const [value, setValue] = useState(converToFeet(min));
  const onChange = (num) => {
    onChangeValue(num);
    setValue(converToFeet(num));
  };
  const gesture = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.start = position.value;
    },
    onActive: (e, ctx) => {
      if (ctx.start + e.translationY > 0) {
        position.value = 0;
      } else {
        if (Math.abs(ctx.start + e.translationY - THUMB_SIZE) < sliderHeight) {
          position.value = ctx.start + e.translationY;
        } else {
          position.value = -sliderHeight + THUMB_SIZE;
        }
      }
      runOnJS(onChange)(
        min +
          Math.abs(
            Math.floor(
              position.value /
                ((sliderHeight - THUMB_SIZE) / (max - min) / step)
            ) * step
          )
      );
    },
    onEnd: () => {},
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: position.value }],
    };
  });

  return (
    <View style={styles.container}>
      <View
        style={styles.track}
        onLayout={(event) => {
          setSliderHeight(event.nativeEvent.layout.height);
        }}
      />
      <PanGestureHandler onGestureEvent={gesture}>
        <Animated.View style={[styles.thumb, animatedStyle]}>
          <CText
            style={{
              position: "absolute",
              left: -150,

              fontSize: 36,
              color: colors.darkGray,
              width: 100,
            }}
            type="bold"
          >
            {value}
          </CText>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 0,
    position: "relative",
  },
  track: {
    width: 8,
    height: "100%",
    backgroundColor: colors.pink,
    borderRadius: 4,
  },
  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
    backgroundColor: colors.lightPink,
    position: "absolute",
    bottom: 0,
    borderColor: colors.pink,
    borderWidth: 1,
    elevation: 2,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    justifyContent: "center",
  },
  label: {
    position: "absolute",
    left: -120,
    width: 100,
  },
});
