import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "red" }}></View>
      <View style={{ flex: 1, backgroundColor: "blue" }}></View>
      <View style={{ flex: 1, backgroundColor: "green" }}></View>
    </View>
  );
}
