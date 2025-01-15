import { Text } from 'react-native';
import { TextInput, Button, StyleSheet, SafeAreaView, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';

export default function Create() {
  const [image, setImage] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (result.granted === false) {
      alert('Permission to access gallery is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.canceled) {
      setImage(pickerResult.assets[0].uri || "");
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.headerText}>Upload Video</Text>
          <Text style={styles.labelText}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Title"
            placeholderTextColor="gray"
          />
          <Text style={styles.labelText}>Upload Picture or Video</Text>
          <TouchableOpacity style={styles.button} onPress={pickImage}>
            <Image source={require("@/assets/icons/upload-icon.png")} />
          </TouchableOpacity>
          {image && <Text style={styles.selectedText}>Selected: {image}</Text>}
          <Text style={styles.labelText}>Upload Thumbnail Image</Text>
          <TouchableOpacity style={styles.thumbButton} onPress={pickImage}>
            <Image source={require("@/assets/icons/upload-sm.png")} />
            <Text style={styles.buttonText}>Choose a file</Text>
          </TouchableOpacity>
          <Text style={styles.labelText}>AI Prompt</Text>
          <TextInput
            style={styles.input}
            placeholder="AI Prompt"
            placeholderTextColor="gray"
          />
          <TouchableOpacity style={styles.submitBtn} onPress={() => {}}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#161622",
  },
  main: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
  headerText: {
    color: "white",
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 33,
    letterSpacing: 1,
  },

  labelText: {
    color: "white",
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 22,
  },
  input: {
    height: 40,
    backgroundColor: "#1E1E2D",
    marginBottom: 10,
    padding: 10,
    color: "white",
    borderRadius: 5,
  },
  button: {
    marginTop: 10,
    width: "100%",
    height: 149,
    backgroundColor: "#1E1E2D",
    justifyContent: "center",
    alignItems: "center",
  },
  thumbButton: {
    marginTop: 10,
    width: "100%",
    height: 40,
    backgroundColor: "#1E1E2D",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  uploadIcon:{
    width: 24,
    height: 24,
  },
  buttonText: {
    color: "#161622",
  },
  selectedText: {
    color: "white",
    marginTop: 10,
  },
  submitBtn: {
    backgroundColor: "#FF8C00",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    fontSize: 16,
    fontWeight: 600,
  },
});