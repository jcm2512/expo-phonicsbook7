import * as React from "react";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, View, Text, Image } from "react-native";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import { Dimensions } from "react-native";

import { Asset } from "expo-asset";

import { appData } from "./appdata";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const assetData = require("./book_data.json");
  const assets = appData.map((item) => Asset.fromModule(require(item.asset)));

  useEffect(() => {
    async function loadAssets() {
      await Promise.all(assets.map((asset) => asset.downloadAsync()));
    }
    loadAssets();
  }, []);

  const currentAsset = assetData.find((item) => item.page === currentPage);

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
        }}
      >
        {/* PAGE CONTAINER */}
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
            source={
              imageAsset
                ? { uri: currentAsset.localUri || currentAsset.uri }
                : null
            }
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
