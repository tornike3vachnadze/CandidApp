import { PixelRatio } from "react-native";
import { Svg, Text } from "react-native-svg";
import React from "react";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

export default StrokeText = (props) => {
  const functionName = "render";

  const style = props.style ? props.style : undefined;

  const fontSize = style && style.fontSize ? style.fontSize : 14;
  const fontFamily = style && style.fontFamily ? style.fontFamily : fonts.bold;
  const fontWeight = style && style.fontWeight ? style.fontWeight : undefined;
  const fill = style && style.color ? style.color : colors.gray_5;
  const stroke = props.colorStroke ? props.colorStroke : colors.white;
  const strokeWidth = props.strokeWidth
    ? PixelRatio.roundToNearestPixel(props.strokeWidth)
    : PixelRatio.roundToNearestPixel(fontSize * 0.08);
  const dy = props.dy ? props.dy : null;
  const exactFit = props.exactFit ? props.exactFit : false;
  const textAnchor = props.textAnchor ? props.textAnchor : null;
  const letterSpacing = props.letterSpacing ? props.letterSpacing : "0";

  const textWidth = props.width;

  return (
    <Svg
      width={textWidth}
      height={props.height}
      style={[{ flexWrap: "wrap" }, style]}
    >
      <Text
        fill={fill}
        stroke={stroke}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        strokeWidth={strokeWidth}
        height={fontSize}
        letterSpacing={letterSpacing}
        textAnchor={textAnchor ? textAnchor : exactFit ? "start" : "middle"}
        x={
          textAnchor && textAnchor === "start"
            ? undefined
            : textAnchor && textAnchor === "end"
            ? textWidth - strokeWidth
            : exactFit
            ? undefined
            : textWidth / 2
        }
        y={props.height / 2}
        dy={dy}
      >
        {props.children}
      </Text>
      <Text
        fill={fill}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        strokeWidth={strokeWidth}
        height={fontSize}
        letterSpacing={letterSpacing}
        textAnchor={textAnchor ? textAnchor : exactFit ? "start" : "middle"}
        x={
          textAnchor && textAnchor === "start"
            ? undefined
            : textAnchor && textAnchor === "end"
            ? textWidth - strokeWidth
            : exactFit
            ? undefined
            : textWidth / 2
        }
        y={props.height / 2}
        dy={dy}
      >
        {props.children}
      </Text>
    </Svg>
  );
};
