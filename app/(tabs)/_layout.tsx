import { Tabs } from "expo-router";
import React from "react";
import { Image, Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";

export default function TabLayout() {

  

  return (
    <Tabs
      screenOptions={{
      tabBarActiveTintColor: "#FFA001",
      headerShown: false,
      tabBarButton: HapticTab,
      tabBarBackground: TabBarBackground, // Use the custom TabBarBackground component
      tabBarStyle: {
        backgroundColor: "#161622", // Set the background color here
        height: 60,
        paddingVertical: 20,
        ...Platform.select({
        ios: {
          // Use a transparent background on iOS to show the blur effect
          position: "absolute",
        },
        default: {},
        }),
      },
      }}
    >
      <Tabs.Screen
      name="home"
      options={{
        title: "Home",
        tabBarIcon: ({ color }) => (
        <Image
          source={require("@/assets/icons/home-icon.png")}
          style={{ tintColor: color }}
        />
        ),
      }}
      />
      <Tabs.Screen
      name="create"
      options={{
        title: "Create",
        tabBarIcon: ({ color }) => (
        <Image
          source={require("@/assets/icons/add-icon.png")}
          style={{ tintColor: color }}
        />
        ),
      }}
      />
      <Tabs.Screen
      name="profile"
      options={{
        title: "Profile",
        tabBarIcon: ({ color }) => (
        <Image
          source={require("@/assets/icons/profile-icon.png")}
          style={{ tintColor: color }}
        />
        ),
      }}
      />
      <Tabs.Screen
      name="saved"
      options={{
        title: "Saved",
        tabBarIcon: ({ color }) => (
        <Image
          source={require("@/assets/icons/bookmark-icon.png")}
          style={{ tintColor: color }}
        />
        ),
      }}
      />
    </Tabs>
  );
}
