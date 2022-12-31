import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import CText from "../../../components/Text/Text";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../../../utils/colors";
import StrokeText from "../../../components/Text/StrokeText";
const { width, height } = Dimensions.get("screen");
import fonts from "../../../utils/fonts";
import { color } from "react-native-reanimated";
import Video from "react-native-video";
const RecordBio = (props) => {
  const [isRecord, setIsRecord] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [videoPath, setVideoPath] = useState("");
  const devices = useCameraDevices();
  const device = devices.front;
  const safeArea = useSafeAreaInsets();
  const camera = useRef();

  useEffect(async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
  }, []);
  if (device == null) {
    return <ActivityIndicator size={20} color={"red"} />;
  }
  const recordVideo = async () => {
    setIsRecord((x) => !x);
    console.log("recording");
    await camera.current.startRecording({
      flash: "on",
      onRecordingFinished: (video) => {
        setVideoPath(video.path);
      },
      onRecordingError: (error) => console.error(error),
    });
  };
  const stopRecord = async () => {
    setIsRecord((x) => !x);
    setIsFinished(true);
    await camera.current.stopRecording();

    console.log("stop recording");
  };
  const recordAgain = () => {
    setIsFinished(false);
    setIsRecord(false);
  };
  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      {!isFinished ? (
        <Camera
          ref={camera}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          video={true}
          audio={true}
        >
          {/* <View style={{ alignItems: "center", marginTop: 50 }}>
        <CText style={[styles.text]}>{props.route.params.title}</CText>
        <CText
          style={[
            styles.text,
            styles.abs,

            { textShadowOffset: { width: 0, height: 0 } },
          ]}
        >
          {props.route.params.title}
        </CText>
      </View> */}

          {/* <StrokeText>{props.route.params.title}</StrokeText> */}
        </Camera>
      ) : (
        <Video
          style={{ width, height, backgroundColor: colors.black }}
          source={{ uri: videoPath }}
          paused={false}
          muted={false}
          repeat={true}
          resizeMode={"cover"}
          controls={false}
        ></Video>
      )}

      <View style={styles.container}>
        <View style={[styles.header, { top: safeArea.top + 32 }]}>
          <CText
            // width={width}
            // height={80}
            // dy={0}
            style={{
              fontSize: 24,
              fontFamily: fonts.bold,
              fontWeight: "bold",
              shadowColor: colors.black,
              shadowOpacity: 0.4,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 5,
              textShadowColor: colors.white,
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 3,
            }}
            strokeWidth={2}
          >
            {props.route.params.title}
          </CText>
        </View>
        <View style={[styles.footerContainer, { bottom: safeArea.bottom }]}>
          <View style={[styles.row, { flexDirection: "column" }]}>
            <CText style={styles.filterName}>Normal</CText>
            <View style={{ flexDirection: "row" }}>
              {[0, 1, 2].map((_, index) => (
                <View style={styles.dot} />
              ))}
            </View>
          </View>
          <View style={styles.row}>
            {isFinished ? (
              <TouchableOpacity onPress={recordAgain}>
                <View style={styles.btnWrapper}>
                  <Image
                    style={styles.btnImg}
                    source={require("../../../assets/arrowLeft.png")}
                  />
                  <CText style={styles.btnText}>Redo</CText>
                </View>
              </TouchableOpacity>
            ) : (
              <View />
            )}
            {!isFinished ? (
              <TouchableOpacity
                onPress={() => (!isRecord ? recordVideo() : stopRecord())}
                style={[styles.btn]}
              >
                <View
                  style={[
                    styles.default,
                    isRecord ? styles.square : styles.circle,
                  ]}
                />
              </TouchableOpacity>
            ) : (
              <View />
            )}
            {isFinished ? (
              <TouchableOpacity onPress={recordAgain}>
                <View style={styles.btnWrapper}>
                  <Image
                    style={styles.btnImg}
                    source={require("../../../assets/arrowRight.png")}
                  />
                  <CText style={styles.btnText}>Done</CText>
                </View>
              </TouchableOpacity>
            ) : (
              <View />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecordBio;

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    position: "absolute",

    fontSize: 30,
    color: colors.gray_5,
    textShadowColor: "white",
    textShadowRadius: 3,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    marginTop: 30,
  },
  abs: {
    position: "absolute",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  btn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  default: {
    shadowColor: colors.white,
    shadowOpacity: 0.8,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 0 },
    backgroundColor: colors.white,
    width: 25,
    height: 25,
  },
  circle: {
    borderRadius: 20,
  },
  square: {
    borderRadius: 0,
    width: 22,
    height: 22,
  },
  footerContainer: {
    alignItems: "center",
    paddingHorizontal: 32,
    position: "absolute",
    left: 0,
    right: 0,
    width,
    height: 150,
  },
  header: {
    alignItems: "center",
    paddingHorizontal: 32,
    position: "absolute",
    left: 0,
    right: 0,
    width,
    height: 150,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 48,

    width,
    justifyContent: "space-between",
  },
  filterName: {
    fontFamily: fonts.medium,
    color: colors.white,
    fontSize: 14,
    marginBottom: 8,
  },
  dot: {
    marginBottom: 32,
    marginHorizontal: 2,
    backgroundColor: colors.white,
    width: 8,
    height: 8,
    borderRadius: 5,
  },
  btnImg: {
    width: 40,
    height: 40,
  },
  btnText: {
    fontFamily: fonts.bold,
    color: colors.white,
    letterSpacing: -1,
    fontSize: 18,
  },
  btnWrapper: { alignItems: "center", justifyContent: "center", width: 70 },
});
