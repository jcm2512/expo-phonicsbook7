import * as React from "react";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, View, Text, Image } from "react-native";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import { Dimensions } from "react-native";

const zoomableViewRef = React.createRef();

const handleZoomEnd = (event, gestureState, zoomableViewEventObject) => {
  console.log(zoomableViewEventObject);
  //   const offsetX =
  //     zoomableViewEventObject.originalWidth -
  //     (zoomableViewEventObject.originalWidth - zoomableViewEventObject.offsetX);
  //   const offsetY =
  //     zoomableViewEventObject.offsetY - zoomableViewEventObject.originalHeight;
  //   console.log(zoomableViewEventObject);
  //   console.log(-offsetX, offsetY);
  //   if (offsetX < 0) {
  //     zoomableViewRef.current.moveBy(offsetX, 0);
  //   }
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ReactNativeZoomableView</Text>
      <View
        style={{
          //   borderWidth: 5,
          flex: 1,
          //   flexShrink: 1,
          height: Dimensions.height,
          width: Dimensions.width,
          //   width: "auto",
        }}
      >
        <ReactNativeZoomableView
          ref={zoomableViewRef}
          maxZoom={20}
          minZoom={1}
          bindToBorders={true}
          //   contentWidth={300}
          //   contentHeight={150}
          panBoundaryPadding={0}
        >
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            source={require("./assets/phonics_1_5.png")}
          />
        </ReactNativeZoomableView>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    // padding: 20,
  },
  //   box: {
  //     width: 60,
  //     height: 60,
  //     marginVertical: 20,
  //   },
});
