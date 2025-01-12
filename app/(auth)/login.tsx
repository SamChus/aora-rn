import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { Link, useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (val: string, name: string) => {
    setData({
      ...data,
      [name]: val,
    });
  };

  const handleLogin = () => {
    console.log(data);
    router.push("/(tabs)/home");
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.headerText}>Login</Text>
        <View style={{ marginTop: 25 }}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Your email address"
            placeholderTextColor="#CDCDE0"
            keyboardType="email-address"
            onChangeText={(val) => handleInputChange(val, "email")}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Your password"
            placeholderTextColor="#CDCDE0"
            secureTextEntry
            onChangeText={(val) => handleInputChange(val, "password")}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account?</Text>
          <Link href="/(auth)/register" style={styles.link}>
            Sign up
          </Link>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    backgroundColor: "#161622",
    fontFamily: "monospace",
  },
  logo: {
    width: 115,
    height: 34.07,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    lineHeight: 31.9,
    letterSpacing: 1,
  },
  input: {
    width: "100%",
    height: 58,
    color: "#fff",
    backgroundColor: "#1E1E2D",
    padding: 17,
    borderRadius: 8,
  },
  inputLabel: {
    color: "#CDCDE0",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 56,
    borderRadius: 8,
    backgroundColor: "#FFA101",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "#161622",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: "Poppins",
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  registerText: {
    color: "#CDCDE0",
    fontSize: 16,
    marginRight: 5,
  },
  link: {
    color: "#FFA101",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: "Poppins",
  },
});