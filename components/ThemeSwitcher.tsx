import { Colors } from '@/constants/Colors';
import { useTheme } from '@/contexts/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ThemeSwitcherProps {
  variant?: 'button' | 'modal';
  onClose?: () => void;
}

export function ThemeSwitcher({ variant = 'button', onClose }: ThemeSwitcherProps) {
  const { theme, currentTheme, setTheme } = useTheme();

  const themes = [
    { key: 'light' as const, label: 'Light', icon: 'sunny' },
    { key: 'dark' as const, label: 'Dark', icon: 'moon' },
    { key: 'system' as const, label: 'System', icon: 'settings' },
  ];

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    if (variant === 'modal' && onClose) {
      onClose();
    }
  };

  const getThemeColor = (colorName: keyof typeof Colors.light) => {
    return Colors[currentTheme][colorName];
  };

  if (variant === 'button') {
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: getThemeColor('background') }]}
        onPress={() => {
          const nextTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
          setTheme(nextTheme);
        }}
      >
        <Ionicons
          name={theme === 'light' ? 'sunny' : theme === 'dark' ? 'moon' : 'settings'}
          size={24}
          color={getThemeColor('text')}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.modal, { backgroundColor: getThemeColor('background') }]}>
      <Text style={[styles.title, { color: getThemeColor('text') }]}>Choose Theme</Text>
      {themes.map((themeOption) => (
        <TouchableOpacity
          key={themeOption.key}
          style={[
            styles.option,
            {
              backgroundColor: theme === themeOption.key ? getThemeColor('tint') + '20' : 'transparent',
              borderColor: theme === themeOption.key ? getThemeColor('tint') : 'transparent',
            },
          ]}
          onPress={() => handleThemeChange(themeOption.key)}
        >
          <Ionicons
            name={themeOption.icon as any}
            size={20}
            color={theme === themeOption.key ? getThemeColor('tint') : getThemeColor('text')}
          />
          <Text
            style={[
              styles.optionText,
              {
                color: theme === themeOption.key ? getThemeColor('tint') : getThemeColor('text'),
              },
            ]}
          >
            {themeOption.label}
          </Text>
          {theme === themeOption.key && (
            <Ionicons
              name="checkmark"
              size={20}
              color={getThemeColor('tint')}
              style={styles.checkmark}
            />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  modal: {
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 12,
    flex: 1,
  },
  checkmark: {
    marginLeft: 'auto',
  },
}); 