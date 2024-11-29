import { handleLocalStorage } from './localStorage.svelte';

// TODO -- simplify this
export const changeTheme = (): void => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = handleLocalStorage('theme');

  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    handleLocalStorage('theme', 'dark');
  }

  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    handleLocalStorage('theme', 'light');
  }

  if (prefersDark && !currentTheme) {
    document.documentElement.setAttribute('data-theme', 'light');
    handleLocalStorage('theme', 'light');
  } else if (!prefersDark && !currentTheme) {
    document.documentElement.setAttribute('data-theme', 'dark');
    handleLocalStorage('theme', 'dark');
  }
};
