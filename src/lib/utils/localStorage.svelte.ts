import { browser } from '$app/environment';

export const handleLocalStorage = (key: string, value?: string): string | void => {
  let storedItem = value;

  if (browser) {
    // if value is provided, add it to key
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));

      return;
    } else {
      // if no value is provided, then get it with key
      const storedValue = localStorage.getItem(key);

      if (storedValue) storedItem = JSON.parse(storedValue);

      return storedItem;
    }
  }
};
