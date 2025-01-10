import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";

export default function HomeScreen() {
  const [name, setName] = useState<string>("");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.container}>
        <Text>{name}</Text>
        <TextInput
          placeholder="type here"
          style={style.textInput}
          onChangeText={(val) => setName(val)}
        />
        <Button title="Click Me" onPress={() => alert("Hi")} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textInput: {
    borderColor: "blacck",
    padding: 19,
    margin: 10,
  },
});
