<script lang="ts">
  import { onDestroy } from 'svelte';

  let { minutes } = $props();
  let seconds = minutes * 60;
  let timeLeft = $state(seconds * 1000); // in milliseconds

  let timer: ReturnType<typeof setInterval>;

  const startCountdown = () => {
    if (timer) clearInterval(timer); // reset if already running

    console.log(`timer started`);

    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft -= 1000;
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  onDestroy(() => {
    clearInterval(timer);
  });
</script>

<!--
@component

## Countdown
component_description

### Features
feature_description

### Props
- prop_name: prop_description
-->

<div class="component-wrapper">
  <div onclick={startCountdown}>{timeLeft.toFixed(0)}</div>
</div>

<style lang="scss">
  div.component-wrapper {
    max-width: 400px;
    padding: 2em;

    font-size: 3rem;

    cursor: pointer;
  }
</style>
