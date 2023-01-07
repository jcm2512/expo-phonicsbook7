import * as React from "react";
import { StatusBar } from "expo-status-bar";

import { Dimensions, StyleSheet, View } from "react-native";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";

import Page from "./Page";
import { useAssets } from "expo-asset";

export default function App() {
  const zoomableViewRef = React.createRef();

  const [assets, error] = useAssets([
    require("./assets/png/splash.png"),
    require("./assets/png/Phonics_1_1.png"),
    require("./assets/png/Phonics_1_2.png"),
    require("./assets/png/Phonics_1_3.png"),
    require("./assets/png/Phonics_1_4.png"),
    require("./assets/png/Phonics_1_5.png"),
    require("./assets/png/Phonics_1_6.png"),
    require("./assets/png/Phonics_1_7.png"),
    require("./assets/png/Phonics_1_8.png"),
    require("./assets/png/Phonics_1_9.png"),
    require("./assets/png/Phonics_1_10.png"),
    require("./assets/png/Phonics_1_11.png"),
    require("./assets/png/Phonics_1_12.png"),
    require("./assets/png/Phonics_1_13.png"),
    require("./assets/png/Phonics_1_14.png"),
    require("./assets/png/Phonics_1_15.png"),
    require("./assets/png/Phonics_1_16.png"),
    require("./assets/png/Phonics_1_17.png"),
    require("./assets/png/Phonics_1_18.png"),
    require("./assets/png/Phonics_1_19.png"),
    require("./assets/png/Phonics_1_20.png"),
  ]);

  return (
    <View style={styles.container}>
      <ReactNativeZoomableView
        ref={zoomableViewRef}
        maxZoom={2}
        minZoom={0.54}
        bindToBorders={true}
        contentHeight={1024}
        contentWidth={724}
        style={{
          padding: 50,
        }}
      >
        <Page source={assets[4]} height={1024} width={724}></Page>
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
