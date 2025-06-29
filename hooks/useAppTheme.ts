import { Colors } from '@/constants/Colors';
import { useTheme } from '@/contexts/ThemeContext';

export function useAppTheme() {
  const { theme, currentTheme, setTheme, toggleTheme } = useTheme();
  const colors = Colors[currentTheme];

  return {
    theme,
    currentTheme,
    colors,
    setTheme,
    toggleTheme,
    isDark: currentTheme === 'dark',
    isLight: currentTheme === 'light',
  };
} 