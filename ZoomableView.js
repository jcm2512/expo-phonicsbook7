import { View, Text } from "react-native";
import React from "react";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import { useAssets } from "expo-asset";
import Page from "./Page";

const minzoom = 0.54;

const ZoomableView = ({ source }) => {
  const zoomableViewRef = React.createRef();

  const handlePinchEnd = (event, gestureState, zoomableViewEventObject) => {
    if (zoomableViewEventObject.zoomLevel <= 0.8) {
      zoomableViewRef.current.zoomLevel = minzoom;
    }
  };

  return (
    <ReactNativeZoomableView
      ref={zoomableViewRef}
      initialZoom={minzoom}
      disablePanOnInitialZoom={true}
      maxZoom={2}
      minZoom={minzoom}
      bindToBorders={true}
      contentHeight={1024}
      contentWidth={724}
      style={{
        padding: 50,
      }}
      onZoomEnd={handlePinchEnd}
    >
      <Page source={source} height={1024} width={724}></Page>
    </ReactNativeZoomableView>
  );
};

export default ZoomableView;
