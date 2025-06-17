<script lang="ts">
  import { onDestroy } from 'svelte';

  let runningCountdown = $state(false);

  let { minutes } = $props();
  let seconds = minutes * 60;
  let timeLeft = $state(seconds * 1000); // in milliseconds

  let timer: ReturnType<typeof setInterval>;

  $effect(() => {
    if (runningCountdown) {
      if (timer) clearInterval(timer); // reset if already running

      timer = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft -= 1000;
        } else {
          clearInterval(timer);
        }
      }, 1000);
    }

    onDestroy(() => {
      clearInterval(timer);
    });
  });

  const startCountdown = () => {
    runningCountdown = true;
  };
</script>

<!--
@component

## Countdown
A button to display a countdown once clicked.

### Features
Takes in a prop to determine the time pool.

### Props
- `minutes` (number): The starting time pool in minutes.
-->

<div class="component-wrapper">
  <button onclick={startCountdown}>
    {Math.floor(timeLeft / 1000)}
  </button>
</div>

<style lang="scss">
  div.component-wrapper {
    button {
      max-width: 400px;
      padding: 1.5em;

      font-size: 4rem;
      color: white;

      cursor: pointer;

      background: none;
      border: 1px solid rgba(198, 145, 247, 0.9);
      border-radius: 20px;
    }
  }
</style>
