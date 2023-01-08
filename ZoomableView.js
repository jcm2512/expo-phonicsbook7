import React, { useContext, useEffect } from "react";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import Page from "./Page";
import { ScrollEnabled, ResetZoom } from "./AppStateContext";

const ZoomableView = ({ source }) => {
  const zoomableViewRef = React.createRef();

  const minzoom = 1;
  const { scrollEnabled, setScrollEnabled } = useContext(ScrollEnabled);
  const { resetZoom, setResetZoom } = useContext(ResetZoom);

  const handlePinchEnd = (event, gestureState, zoomableViewEventObject) => {
    if (zoomableViewEventObject.zoomLevel <= 1.1) {
      zoomableViewRef.current.zoomLevel = minzoom;
      setScrollEnabled(true);
    }
  };

  const handleOnZoomBefore = (event, gestureState, zoomableViewEventObject) => {
    setScrollEnabled(false);
  };

  const updateResetZoom = () => {
    console.log(resetZoom);
  };

  useEffect(() => {
    // zoomableViewRef.current.zoomLevel = minzoom;
    zoomableViewRef.current.zoomTo(minzoom);

    console.log(zoomableViewRef.current.zoomLevel);
    setScrollEnabled(true);
  }, [resetZoom]);

  return (
    <ReactNativeZoomableView
      ref={zoomableViewRef}
      initialZoom={minzoom}
      disablePanOnInitialZoom={true}
      maxZoom={3}
      minZoom={minzoom}
      zoomStep={4.0}
      bindToBorders={true}
      contentHeight={720}
      contentWidth={360}
      style={{
        padding: 50,
      }}
      onZoomBefore={handleOnZoomBefore}
      onZoomEnd={handlePinchEnd}
    >
      <Page source={source} height={720} width={360}></Page>
    </ReactNativeZoomableView>
  );
};

export default ZoomableView;
