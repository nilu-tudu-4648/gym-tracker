import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import React from "react";
import { Platform, TouchableOpacity } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";

export default function TabLayout() {
  const { currentTheme } = useTheme();
  const router = useRouter();
  const themeColors = Colors[currentTheme];

  const renderHeaderRight = (routeName: string) => {
    if (routeName === "Customers") {
      const PlusButton = () => (
        <TouchableOpacity
          style={{ marginRight: 16 }}
          onPress={() => {
            // Handle plus button press - you can add navigation logic here

            router.push("/customer/create");
          }}
        >
          <Ionicons name="add" size={24} color={themeColors.text} />
        </TouchableOpacity>
      );
      PlusButton.displayName = "PlusButton";
      return PlusButton;
    }
    const ThemeSwitcherButton = () => <ThemeSwitcher />;
    ThemeSwitcherButton.displayName = "ThemeSwitcherButton";
    return ThemeSwitcherButton;
  };

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: themeColors.tint,
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        headerRight: renderHeaderRight(route.name),
        headerStyle: {
          backgroundColor: themeColors.background,
        },
        headerTintColor: themeColors.text,
        headerTitleStyle: {
          fontWeight: "700",
        },
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {
            backgroundColor: themeColors.background,
            borderTopWidth: 0,
          },
        }),
      })}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="dashboard" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Customers"
        options={{
          title: "Members",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="people" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="payment"
        options={{
          title: "Payments",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="attach-money" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="settings" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
