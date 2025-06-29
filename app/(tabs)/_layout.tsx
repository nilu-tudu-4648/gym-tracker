import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useTheme } from '@/contexts/ThemeContext';

export default function TabLayout() {
  const { currentTheme } = useTheme();
  const themeColors = Colors[currentTheme];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: themeColors.tint,
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        headerRight: () => <ThemeSwitcher />,
        headerStyle: {
          backgroundColor: themeColors.background,
        },
        headerTintColor: themeColors.text,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {
            backgroundColor: themeColors.background,
            borderTopWidth: 0
          },
        }),
      }}>
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="dashboard" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Customers"
        options={{
          title: 'Members',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="people" color={color} />,
        }}
      />
      <Tabs.Screen
        name="payment"
        options={{
          title: 'Payments',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="attach-money" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="settings" color={color} />,
        }}
      />
    </Tabs>
  );
}
