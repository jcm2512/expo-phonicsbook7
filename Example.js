import * as React from "react";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, View, Text, Image } from "react-native";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import { Dimensions } from "react-native";

import { Asset } from "expo-asset";

async function loadImage() {
  const imageAsset = Asset.fromModule(require("./assets/phonics_1_5.png"));
  await imageAsset.downloadAsync();
  return imageAsset;
}

export default function App() {
  const zoomableViewRef = React.createRef();

  const [imageAsset, setImageAsset] = useState(null);
  const [imgSize, setImgSize] = useState({ width: 100, height: 100 });
  const [maxWidth, setMax] = useState(100);

  useEffect(() => {
    loadImage().then((asset) => {
      setImageAsset(asset);
      setImgSize({ width: asset.width, height: asset.height });
    });
  }, []);

  useEffect(() => {
    setMax(Dimensions.get("window").width / imgSize.width);
    console.log(maxWidth);
  }, [imgSize]);

  return (
    <View style={styles.container}>
      <ReactNativeZoomableView
        ref={zoomableViewRef}
        maxZoom={5}
        minZoom={maxWidth}
        bindToBorders={true}
        contentHeight={1200}
        contentWidth={724}
        style={{
          padding: 0,
          // justifyContent: "flex-start",
          // height: 40,
          // width: 1200,
          backgroundColor: "blue",
        }}
      >
        <View
          style={{
            height: 1024,
            width: 724,
            backgroundColor: "green",
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
              position: "absolute",
            }}
            source={
              imageAsset ? { uri: imageAsset.localUri || imageAsset.uri } : null
            }
          />
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
      </ReactNativeZoomableView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
});
