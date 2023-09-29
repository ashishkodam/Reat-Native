import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Ashish");
  const [personInfo, setPersonInfo] = useState({ name: "Ashish", age: 30 });

  const pressButtonHandler = () => {
    setName("Ashish kodam");
    setPersonInfo({ name: "Ashish Kodam", age: 27 });
  };
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        Personal data Name:{name} and age:{age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Update state" onPress={pressButtonHandler} />
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
  buttonContainer: {
    marginTop: 20,
  },
});
