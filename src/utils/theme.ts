import { Theme } from '../types';

const THEME_STORAGE_KEY = 'theme';

export const getStoredTheme = (): Theme => {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return (stored === 'dark-mode' || stored === 'light-mode') ? stored : 'dark-mode';
};

export const setStoredTheme = (theme: Theme): void => {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
};

export const applyTheme = (theme: Theme): void => {
  document.body.className = theme;
};

