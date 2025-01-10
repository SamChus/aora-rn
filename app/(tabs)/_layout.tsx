import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
      tabBarActiveTintColor: Colors["dark"].background,
      headerShown: false,
      // tabBarButton: HapticTab,
      // tabBarBackground: TabBarBackground,
      tabBarStyle: Platform.select({
        ios: {
        // Use a transparent background on iOS to show the blur effect
        position: "absolute",
        },
        default: {},
      }),
      }}
    >
      <Tabs.Screen
      name="home"
      options={{
        title: "Home",
        tabBarIcon: ({ color }) => (
        <Image
          source={require('@/assets/icons/home.svg')}
          style={{ tintColor: color, width: 28, height: 28 }}
        />
        ),
      }}
      />
      <Tabs.Screen
      name="search"
      options={{
        title: "Search",
        tabBarIcon: ({ color }) => (
        <IconSymbol size={28} name="magnifyingglass" color={color} />
        ),
      }}
      />
      <Tabs.Screen
      name="explore"
      options={{
        title: "Profile",
        tabBarIcon: ({ color }) => (
        <IconSymbol size={28} name="paperplane.fill" color={color} />
        ),
      }}
      />
    </Tabs>
  );
}
