<script lang="ts">
  let { start = false, pause = false, reset = false, minutes = 1, onEnd } = $props();

  let seconds = minutes * 60;
  let timeLeft = $state(seconds * 1000); // in milliseconds
  let timeOnPause = $state(0);

  let timer: ReturnType<typeof setInterval>;

  function startCountdown() {
    if (timeOnPause !== 0) timeLeft = timeOnPause;

    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft-= 1000; // decrease by 1000 milliseconds
      } else {
        clearInterval(timer);
        onEnd?.();
      }
    }, 1000);
  }

  function pauseCountdown() {
    if (timer) clearInterval(timer);
    timeOnPause = timeLeft;
  }

  function resetCountdown() {
    if (timer) clearInterval(timer);
    timeLeft = seconds * 1000; // reset to initial time
    timeOnPause = 0;
  }

  $effect(() => {
    if (start) startCountdown();
    if (pause) pauseCountdown()
    if (reset) resetCountdown();
  });
</script>

<!--
@component

## Countdown
A button to display a countdown once clicked.

### Features
Takes in a prop to determine the initial time.

### Props
- `start` (boolean): If true, the countdown starts immediately.
- `pause` (boolean): If true, the countdown pauses.
- `reset` (boolean): If true, the countdown resets to the initial time.
- `minutes` (number): The initial time in minutes.
-->

<div class="component-wrapper">
  <button onclick={() => (startCountdown())}>
    {Math.floor(timeLeft / 1000)}
  </button>
</div>

<style lang="scss">
  div.component-wrapper {
    button {
      width: 300px;
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
