import { browser } from '$app/environment';
// deprecated : use set/getLocalStorage from localStorage.svelte
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
  // deprecated : use set/getLocalStorage from localStorage.svelte
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
  // deprecated : use set/getLocalStorage from localStorage.svelte
  const currentTheme = handleLocalStorage('theme');

  if (!currentTheme) {
    setThemeAttribute(userPrefersDarkMode() ? 'dark' : 'light');
    // deprecated : use set/getLocalStorage from localStorage.svelte
    handleLocalStorage('theme', userPrefersDarkMode() ? 'dark' : 'light');
  }

  if (currentTheme === 'dark') {
    setThemeAttribute('light');
    // deprecated : use set/getLocalStorage from localStorage.svelte
    handleLocalStorage('theme', 'light');
  }

  if (currentTheme === 'light') {
    setThemeAttribute('dark');
    // deprecated : use set/getLocalStorage from localStorage.svelte
    handleLocalStorage('theme', 'dark');
  }
};
