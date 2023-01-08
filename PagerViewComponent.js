import React, { useContext } from "react";

import { StyleSheet, View } from "react-native";

import PagerView from "react-native-pager-view";
import { ScrollEnabled } from "./AppStateContext";
import ZoomableView from "./ZoomableView";

export default function App() {
  const zoomableViewRef = React.createRef();
  const { scrollEnabled, setScrollEnabled } = useContext(ScrollEnabled);

  return (
    <PagerView
      style={styles.pagerView}
      initialPage={0}
      transitionStyle={"curl"}
      scrollEnabled={scrollEnabled}
    >
      <View key="1">
        <ZoomableView
          source={require("./assets/png/Phonics_1_1.png")}
        ></ZoomableView>
      </View>
      <View key="2">
        <ZoomableView
          source={require("./assets/png/Phonics_1_2.png")}
        ></ZoomableView>
      </View>
      <View key="3">
        <ZoomableView
          source={require("./assets/png/Phonics_1_3.png")}
        ></ZoomableView>
      </View>
      <View key="4">
        <ZoomableView
          source={require("./assets/png/Phonics_1_4.png")}
        ></ZoomableView>
      </View>
      <View key="5">
        <ZoomableView
          source={require("./assets/png/Phonics_1_5.png")}
        ></ZoomableView>
      </View>
    </PagerView>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
});
