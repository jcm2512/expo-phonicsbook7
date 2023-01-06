import { View, Text, Image } from "react-native";
import React from "react";

const Page = ({ source }) => {
  return (
    <View
      style={{
        height: 1024,
        width: 724,
        // TODO: Update background image to show loading image
        backgroundColor: "green",
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
      <View
        style={{
          position: "absolute",
          width: 24,
          height: 24,
          backgroundColor: "red",
          left: 700,
        }}
      ></View>
    </View>
  );
};

export default Page;
