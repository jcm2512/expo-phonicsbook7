import * as React from "react";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, View } from "react-native";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";

import Page from "./Page";

export default function App() {
  const zoomableViewRef = React.createRef();

  return (
    <View style={styles.container}>
      <ReactNativeZoomableView
        ref={zoomableViewRef}
        maxZoom={5}
        minZoom={0.54}
        bindToBorders={true}
        contentHeight={1200}
        contentWidth={724}
        style={{
          padding: 0,
        }}
      >
        <Page source={require("./assets/png/Phonics_1_7.png")}></Page>
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
