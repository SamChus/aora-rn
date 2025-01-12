import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Create() {
  return (
   <SafeAreaView style={styles.container}>
      <View>
        <Text>Create</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    backgroundColor: "#161622",
  },
})