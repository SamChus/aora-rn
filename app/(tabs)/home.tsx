import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
// import Carousel from "react-native-reanimated-carousel";
import Slider from "@/components/Slider";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import { ImageSlider } from "@/constants/data";


// const width = Dimensions.get("window").width;



export default function Home() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Welcome back</Text>
            <Text style={styles.username}>John Doe</Text>
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
          <Slider itemList={ImageSlider}/>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 17,
    justifyContent: "center",
    backgroundColor: "#161622",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    // paddingVertical: 10
  },
  welcomeText: {
    fontSize: 14,
    color: "#CDCDE0",
    fontWeight: "bold",
    fontFamily: "monospace",
  },
  username: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
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
    width: "95%",
    height: 58,
    color: "#fff",
    backgroundColor: "#1E1E2D",
    paddingHorizontal: 17,
    borderRadius: 8,
    marginVertical: 20,
  },
  input: {
    color: "#fff",
    // padding: 17,
  },
});
