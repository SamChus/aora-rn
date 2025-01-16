import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Image } from "react-native";

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <Image
            source={require("@/assets/images/avatar.png")}
            style={styles.avatar}
          />
          <Text>Samuel Chukwuma</Text>
          <View style={styles.stats}>
            <View>
              <Text style={styles.statsValue}>10</Text>
              <Text style={styles.statsText}>Posts</Text>
            </View>
            <View>
              <Text style={styles.statsValue}>20</Text>
              <Text style={styles.statsText}>Views</Text>
            </View>
          </View>
          <Image
            source={require("@/assets/icons/emptyState-icon.png")}
            style={styles.emptyState}
          />
          <Text style={styles.emptyStateText}>No videos found for this profile</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Back to Explore
            </Text>
          </TouchableOpacity>
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
    alignContent: "center",
    backgroundColor: "#161622",
  },
  main: {
    flex: 1,
    width: "90%",
    // alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    // marginVertical: 60,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
  },
  username: {
    fontSize: 20,
    color: "#FFF",
    textAlign: "center",
    fontWeight: 600,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  statsValue: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
    fontWeight: 600,
  },
  statsText: {
    color: "#CDCDE0",
    fontSize: 14,
    textAlign: "center",
  },
  emptyState: {
    width: 270,
    height: 216,
    alignSelf: "center",
    marginTop: 60,
  },
  emptyStateText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#FF9C01",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    height: 50,
  },
  buttonText: {
    color: "#161622",
    fontSize: 16,
    textAlign: "center",
  },
});
