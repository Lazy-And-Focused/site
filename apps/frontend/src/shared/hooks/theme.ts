import { useEffect, useState } from 'react';

export type Theme = 'emerald' | 'forest';

const THEME_KEY = 'laf-theme';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
        return 'emerald';
    }
    
    const savedTheme = localStorage.getItem(THEME_KEY) as Theme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      return savedTheme;
    }
    
    return prefersDark ? 'forest' : 'emerald';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('emerald', 'forest');
    
    // Add current theme class
    root.classList.add(theme);
    
    // Update data-theme attribute for daisyUI
    root.setAttribute('data-theme', theme);
    
    // Save to localStorage
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'emerald' ? 'forest' : 'emerald');
  };

  const setThemeTo = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return {
    theme,
    isDark: theme === 'forest',
    toggleTheme,
    setTheme: setThemeTo,
  };
};