import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  // Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Slider from "@/components/Slider";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import { ImageSlider } from "@/constants/data";
import Post from "@/components/Post";

// const width = Dimensions.get("window").width;

export default function Home() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.header}>
            <View>
              <Text style={styles.welcomeText}>Welcome back</Text>
              <Text style={styles.username}>Samuel Chukwuma</Text>
            </View>
            <Image
              source={require("@/assets/icons/logo-icon.png")}
              style={styles.logo}
            />
          </View>
          <View style={styles.inputField}>
            <TextInput
              style={styles.input}
              placeholder="Search for products"
              placeholderTextColor="#fff"
            />
            <MaterialIcons name="search" size={24} color="#fff" />
          </View>
          <Text style={styles.sliderText}>Trending Videos</Text>
          <Slider itemList={ImageSlider} />
          <Post />
          <Post />
          <Post />
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#161622",
    paddingBottom: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginHorizontal: 20,

    // paddingVertical: 10
  },
  welcomeText: {
    fontSize: 14,
    color: "#CDCDE0",
    fontWeight: 600,
    fontFamily: "Poppins",
  },
  sliderText: {
    fontSize: 16,
    color: "#CDCDE0",
    fontWeight: 600,
    fontFamily: "Poppins",
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginTop: 20,
  },
  username: {
    fontSize: 24,
    color: "#fff",
    fontWeight: 600,
    marginTop: 3,
    letterSpacing: -1,
    fontFamily: "Poppins",
  },
  logo: {
    width: 37,
    height: 38.07,
    objectFit: "fill",
  },
  inputField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 58,
    color: "#fff",
    backgroundColor: "#1E1E2D",
    paddingHorizontal: 17,
    borderRadius: 8,
    marginVertical: 20,
    marginHorizontal: 20,
    width: "90%",
  },
  input: {
    color: "#fff",
    width: "90%",
    fontWeight: 400,
    // padding: 17,
  },
});
