import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppStateContext } from "./AppStateContext";
import PagerViewComponent from "./PagerViewComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <AppStateContext.Provider value="hello from context">
        <PagerViewComponent />
      </AppStateContext.Provider>

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
