/**
 * Creates and returns a debounced version of the given function.
 *
 * The debounced function postpones execution of `fn` until after
 * `delay` milliseconds have elapsed since the last time it was called.
 *
 * Note: This does **not** automatically run `fn`. It returns a new function
 * that you must call yourself.
 *
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
