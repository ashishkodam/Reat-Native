import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [name, setName] = useState("Ashish");
  const [age, setAge] = useState("30");

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the name"
        onChangeText={(val) => setName(val)}
      />
      <Text>
        Name:{name}, age:{age}
      </Text>
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
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
