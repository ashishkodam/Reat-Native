import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.blodText}>Hello, World!</Text>
      </View>

      <View style={styles.body}>
        <Text>H1</Text>
        <Text>H2</Text>
        <Text>H3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  blodText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
  },
});
