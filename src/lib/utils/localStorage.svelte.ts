import { browser } from '$app/environment';

export const handleLocalStorage = (key: string, value?: string): string => {
  let storedItem = value;

  if (browser) {
    const item = localStorage.getItem(key);

    if (item) storedItem = JSON.parse(item);
  }

  if (value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  return storedItem;
};
