import { useEffect, useState } from 'react';

import { SystemThemeIcon, LightThemeIcon, DarkThemeIcon } from './icons';

export const ThemeSwitcher = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [matches, setMatches] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.theme ?? (matches ? 'forest' : 'emerald'),
  );

  useEffect(() => {
    const mm = window.matchMedia('(prefers-color-scheme: dark)');

    const listener = () => setMatches(mm.matches);
    mm.addEventListener('change', listener);

    return () => mm.removeEventListener('change', listener);
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      currentTheme === 'system' ? (matches ? 'forest' : 'emerald') : currentTheme,
    );
    localStorage.theme = currentTheme;
  }, [matches, currentTheme]);

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
