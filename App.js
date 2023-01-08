import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PagerViewComponent from "./PagerViewComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <PagerViewComponent />
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
