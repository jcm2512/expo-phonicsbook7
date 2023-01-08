import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollEnabled, ResetZoom } from "./AppStateContext";
import PagerViewComponent from "./PagerViewComponent";
import Button from "./Button";

export default function App() {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [resetZoom, setResetZoom] = useState(0);
  const handleOnPress = () => {
    setResetZoom(resetZoom + 1);
  };
  return (
    <View style={styles.container}>
      <ScrollEnabled.Provider value={{ scrollEnabled, setScrollEnabled }}>
        <ResetZoom.Provider value={{ resetZoom, setResetZoom }}>
          <PagerViewComponent />
          <Button title="Back" onPress={handleOnPress} />
        </ResetZoom.Provider>
      </ScrollEnabled.Provider>

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
