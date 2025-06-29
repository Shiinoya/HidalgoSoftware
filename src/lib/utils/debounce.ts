/**
 * @param fn - The function to debounce (accepts one argument).
 * @param delay - Delay time in milliseconds.
 * @returns A debounced function that postpones execution of `fn`.
 */

export function debounce<T>(fn: (arg: T) => void, delay: number): (arg: T) => void {
  let timer: ReturnType<typeof setTimeout>;

  return (arg: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(arg), delay);
  };
}
