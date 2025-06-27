import { browser } from '$app/environment';

// deprecated : use set/getLocalStorage from localStorage.svelte
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

function setLocalStorage<T>(key: string, value: T): void {
  if (!browser) return;
  localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorage<T>(key: string): T | undefined {
  if (!browser) return;
  const stored = localStorage.getItem(key);
  return stored ? (JSON.parse(stored) as T) : undefined;
}

export { setLocalStorage, getLocalStorage };
