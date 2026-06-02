import { useEffect, useMemo, useState } from 'react';
import { defaultThemeId, themes } from '../config/themes';

const THEME_STORAGE_KEY = 'portfolio-theme';

export function useTheme() {
  const [themeId, setThemeId] = useState(() => localStorage.getItem(THEME_STORAGE_KEY) || defaultThemeId);

  const theme = useMemo(() => themes.find((item) => item.id === themeId) || themes[0], [themeId]);

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
    localStorage.setItem(THEME_STORAGE_KEY, theme.id);
  }, [theme]);

  return { theme, themes, setThemeId };
}
