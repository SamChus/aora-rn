// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { Link } from 'expo-router'

// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text>HomeScreen</Text>
//       <Link href="/posts">Posts</Link>
//     </View>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "white"
//     }
// })

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Image } from "react-native";

export default function OnBoardingScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/onboading.png")}
        width={375}
        height={298}
      />
      <Text style={styles.text}>
        Discover Endless Possibilities with{" "}
        <Text style={styles.coloredText}>Aora </Text>
      </Text>
      <Image
        source={require("@/assets/images/path.png")}
        style={styles.textPath}
      />
      <Text style={styles.description}>
        Where Creativity Meets Innovation: Embark on a Journey of Limitless
        Exploration with Aora
      </Text>
      <TouchableOpacity style={styles.button}>
        <Link href="/posts">Posts</Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#161622",
  },

  text: {
    color: "white",
    width: 333,
    height: 72,
    fontSize: 30,
    fontWeight: 600,
    lineHeight: 36,
    letterSpacing: -1,
    textAlign: "center",
    fontFamily: "Poppins",
  },
  description: {
    width: 333,
    height: 72,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 22.4,
    letterSpacing: 0,
    color: "white",
    textAlign: "center",
    fontFamily: "Poppins",
},
  coloredText: {
    color: "#FFA101",
    position: "relative",
  },
  textPath: {
    width: 65.03,
    height: 13.69,
    position: "relative",
    bottom: "3%",
    right: "-25%",
  },
  button: {
    width: 333,
    height: 56,
    borderRadius: 8,
    backgroundColor: "#FFA101",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  }
});
