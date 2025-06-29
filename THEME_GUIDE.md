# Theme System Guide

This guide explains how to use the comprehensive theme system implemented in the gym tracker app.

## Overview

The theme system provides:
- **Light**, **Dark**, and **System** theme options
- Persistent theme storage using AsyncStorage
- Automatic theme switching based on system preferences
- Easy-to-use hooks and components for theme-aware UI

## Core Components

### 1. ThemeContext (`contexts/ThemeContext.tsx`)
The main theme provider that manages theme state and provides theme switching functionality.

### 2. ThemeSwitcher (`components/ThemeSwitcher.tsx`)
A reusable component that provides UI for theme switching in two variants:
- **Button variant**: Simple toggle button for quick theme switching
- **Modal variant**: Full modal with all theme options

### 3. Hooks
- `useTheme()`: Access theme context directly
- `useAppTheme()`: Convenient hook with theme colors and utilities
- `useThemeColor()`: Legacy hook for backward compatibility

## Usage Examples

### Basic Theme Usage

```tsx
import { useAppTheme } from '@/hooks/useAppTheme';

function MyComponent() {
  const { colors, isDark, toggleTheme } = useAppTheme();

  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>
        Hello World
      </Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
}
```

### Using ThemeSwitcher Component

```tsx
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

// Button variant (for headers, toolbars)
<ThemeSwitcher variant="button" />

// Modal variant (for settings screens)
<ThemeSwitcher variant="modal" onClose={() => setModalVisible(false)} />
```

### Theme-Aware Styling

```tsx
import { useAppTheme } from '@/hooks/useAppTheme';

function StyledComponent() {
  const { colors } = useAppTheme();

  return (
    <View style={[
      styles.container,
      { backgroundColor: colors.background }
    ]}>
      <Text style={[
        styles.text,
        { color: colors.text }
      ]}>
        Theme-aware text
      </Text>
    </View>
  );
}
```

## Available Theme Colors

The theme system provides these color properties:

- `background`: Main background color
- `text`: Primary text color
- `tint`: Accent/tint color
- `icon`: Icon color
- `tabIconDefault`: Default tab icon color
- `tabIconSelected`: Selected tab icon color

## Theme Options

1. **Light**: Always use light theme
2. **Dark**: Always use dark theme  
3. **System**: Follow system theme preference

## Integration Points

### Tab Layout
The theme switcher is automatically added to all tab screens as a header button.

### Settings Screen
A dedicated settings screen (`app/(tabs)/settings.tsx`) provides a full theme selection modal.

### Existing Components
All existing components have been updated to use the new theme system:
- Dashboard screen
- Tab navigation
- Headers and navigation bars

## Best Practices

1. **Use the `useAppTheme` hook** for new components
2. **Apply theme colors dynamically** rather than hardcoding colors
3. **Test both light and dark themes** during development
4. **Use semantic color names** (text, background, tint) rather than specific colors
5. **Consider contrast ratios** when choosing custom colors

## Migration from Old System

If you have existing components using the old theme system:

1. Replace `useColorScheme()` with `useAppTheme()`
2. Update `useThemeColor()` calls to use `colors` from `useAppTheme()`
3. Replace hardcoded colors with theme-aware colors

## Example Migration

**Before:**
```tsx
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';

const colorScheme = useColorScheme();
const backgroundColor = useThemeColor({}, 'background');
```

**After:**
```tsx
import { useAppTheme } from '@/hooks/useAppTheme';

const { colors } = useAppTheme();
const backgroundColor = colors.background;
```

## Troubleshooting

### Theme not persisting
- Ensure AsyncStorage is properly installed
- Check that the ThemeProvider wraps your app

### Colors not updating
- Make sure you're using the theme colors from the hook
- Verify the component is wrapped in ThemeProvider

### Performance issues
- The theme system is optimized for performance
- Theme changes only trigger re-renders when necessary 