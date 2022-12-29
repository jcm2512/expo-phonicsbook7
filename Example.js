import * as React from "react";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, View, Text, Image } from "react-native";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";

import { Asset } from "expo-asset";

export default function App() {
  const zoomableViewRef = React.createRef();

  const [imageAsset, setImageAsset] = useState(null);
  const [imgSize, setImgSize] = useState(null);

  useEffect(() => {
    async function loadImage() {
      const asset = Asset.fromModule(require("./assets/phonics_1_5.png"));
      await asset.downloadAsync();
      setImageAsset(asset);
      setImgSize(asset);
      console.log(imgSize);
    }
    loadImage();
  }, []);
  return (
    <View style={styles.container}>
      <ReactNativeZoomableView
        ref={zoomableViewRef}
        maxZoom={20}
        minZoom={1}
        bindToBorders={true}
        style={{ justifyContent: "flex-start" }}
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
            width: 50,
            height: 50,
            backgroundColor: "red",
          }}
        ></View>
      </ReactNativeZoomableView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "stretch",
    // justifyContent: "center",
  },
});
