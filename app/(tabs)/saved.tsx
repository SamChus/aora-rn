import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Post from "@/components/Post";

export default function Saved() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <Text style={styles.headerText}>Saved Videos</Text>
          <TextInput
            style={styles.input}
            placeholder="Title"
            placeholderTextColor="gray"
          />
          <Post />
          <Post />
          <Post />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    backgroundColor: "#161622",
  },
  main: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    // marginVertical: 60,
  },
  headerText: {
    color: "white",
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 33,
    letterSpacing: 1,
  },
  input: {
    height: 58,
    backgroundColor: "#1E1E2D",
    marginBottom: 10,
    padding: 10,
    color: "white",
    borderRadius: 8,
  },
});
