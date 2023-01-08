import { View, Text, Image } from "react-native";
import React from "react";

const Page = ({ source, height, width }) => {
  return (
    <View
      style={{
        height: height,
        width: width,
        // TODO: Update background image to show loading image
        backgroundColor: "white",
      }}
    >
      {/* PAGE IMAGE */}
      <Image
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "contain",
          position: "absolute",
        }}
        source={source}
      />
      {/* CLICKABLE AREA */}
      {/* <View
        style={{
          position: "absolute",
          width: 24,
          height: 24,
          backgroundColor: "red",
          left: 700,
        }}
      ></View> */}
    </View>
  );
};

export default Page;
