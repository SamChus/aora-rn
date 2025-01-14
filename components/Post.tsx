import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

type Props = {}

const Post = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <Image source={require("@/assets/images/avatar.png")} style={styles.avatar}/>
        <View style={styles.postText}>
          <Text style={styles.postTitle}>Post Title</Text>
          <Text style={styles.postContent}>Post Content</Text>
        </View>
        <Image source={require("@/assets/icons/action-icon.png")} style={styles.actionicon}/>
      </View>
      <Image source={require("@/assets/images/img1.png")} style={styles.postImage}/>
    </View>
  );
}

export default Post

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: 265,
    marginBottom: 60,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  postText: {
    flex: 1,
    justifyContent: "flex-start",
    marginLeft: 10,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    color: "#FFF",
  },
  postContent: {
    fontSize: 14,
    color: "#CDCDE0",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#FF9C01",
  },
  actionicon: {
    width: 20,
    height: 25,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});