import { useTheme } from '@shared/hooks';

import { SunIcon, MoonIcon } from './icons';

export const ThemeSwitcher = () => {
  const { theme: _theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  );
};
