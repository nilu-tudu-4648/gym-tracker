import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Colors } from '@/constants/Colors';
import { useTheme } from '@/contexts/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SettingsScreen() {
  const { currentTheme } = useTheme();
  const [showThemeModal, setShowThemeModal] = useState(false);
  const themeColors = Colors[currentTheme];

  const settingsItems = [
    {
      title: 'Theme',
      subtitle: 'Choose your preferred theme',
      icon: 'color-palette',
      onPress: () => setShowThemeModal(true),
    },
    {
      title: 'Notifications',
      subtitle: 'Manage notification preferences',
      icon: 'notifications',
      onPress: () => {},
    },
    {
      title: 'Privacy',
      subtitle: 'Privacy and security settings',
      icon: 'shield-checkmark',
      onPress: () => {},
    },
    {
      title: 'About',
      subtitle: 'App version and information',
      icon: 'information-circle',
      onPress: () => {},
    },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: themeColors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: themeColors.text }]}>Settings</Text>
        <Text style={[styles.subtitle, { color: themeColors.icon }]}>
          Customize your app experience
        </Text>
      </View>

      <View style={styles.section}>
        {settingsItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.settingItem, { borderBottomColor: themeColors.icon + '20' }]}
            onPress={item.onPress}
          >
            <View style={styles.settingLeft}>
              <View style={[styles.iconContainer, { backgroundColor: themeColors.tint + '20' }]}>
                <Ionicons name={item.icon as any} size={20} color={themeColors.tint} />
              </View>
              <View style={styles.settingText}>
                <Text style={[styles.settingTitle, { color: themeColors.text }]}>
                  {item.title}
                </Text>
                <Text style={[styles.settingSubtitle, { color: themeColors.icon }]}>
                  {item.subtitle}
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={themeColors.icon} />
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        visible={showThemeModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowThemeModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <ThemeSwitcher variant="modal" onClose={() => setShowThemeModal(false)} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
  },
  section: {
    marginTop: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    margin: 20,
    maxWidth: 400,
    width: '100%',
  },
}); 