import { useEffect, useState } from 'react';

import { SystemThemeIcon, LightThemeIcon, DarkThemeIcon } from './icons';

export const ThemeSwitcher = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [mediaMatches, setMediaMatches] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  );
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.theme ?? (mediaMatches ? 'forest' : 'emerald'),
  );

  useEffect(() => {
    const mediaMatches = window.matchMedia('(prefers-color-scheme: dark)');

    const listener = () => setMediaMatches(mediaMatches.matches);
    mediaMatches.addEventListener('change', listener);

    return () => mediaMatches.removeEventListener('change', listener);
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      currentTheme === 'system' ? (mediaMatches ? 'forest' : 'emerald') : currentTheme,
    );
    localStorage.theme = currentTheme;
  }, [mediaMatches, currentTheme]);

  const toggleTheme = () => {
    const themes = ['system', 'emerald', 'forest'];

    setCurrentTheme(themes[(themes.indexOf(currentTheme) + 1) % themes.length]);
  };

  const icon =
    currentTheme === 'system' ? (
      <SystemThemeIcon />
    ) : currentTheme === 'emerald' ? (
      <LightThemeIcon />
    ) : (
      <DarkThemeIcon />
    );

  return (
    <button onClick={toggleTheme} {...props} aria-label='Переключить тему'>
      {icon}
    </button>
  );
};
