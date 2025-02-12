import { browser } from '$app/environment';
import { handleLocalStorage } from './localStorage.svelte';

const userPrefersDarkMode = (): boolean | void => {
  if (browser) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
};

const setThemeAttribute = (theme: string): void => {
  if (browser) {
    document.documentElement.setAttribute('data-theme', theme);
  }
};

export const setTheme = (): void => {
  const currentTheme = handleLocalStorage('theme');

  if (currentTheme) {
    setThemeAttribute(currentTheme);
  }

  if (!currentTheme) {
    if (userPrefersDarkMode()) {
      setThemeAttribute('dark');
    } else {
      setThemeAttribute('light');
    }
  }
};

export const changeTheme = (): void => {
  const currentTheme = handleLocalStorage('theme');

  if (!currentTheme) {
    setThemeAttribute(userPrefersDarkMode() ? 'dark' : 'light');
    handleLocalStorage('theme', userPrefersDarkMode() ? 'dark' : 'light');
  }

  if (currentTheme === 'dark') {
    setThemeAttribute('light');
    handleLocalStorage('theme', 'light');
  }

  if (currentTheme === 'light') {
    setThemeAttribute('dark');
    handleLocalStorage('theme', 'dark');
  }
};
