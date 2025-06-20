<script lang="ts">
  let { start = false, pause = false, reset = false, timeToStart = 60000, onEnd } = $props();

  let timeLeft = $state(timeToStart);
  let timeOnPause = $state(0);

  let timer: ReturnType<typeof setInterval>;

  // TODO : add a pause functionality when being clicked on while timer is running
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
    timeLeft = timeToStart; // reset to initial time
    timeOnPause = 0;
  }

  $effect(() => {
    if (!start && !pause) timeLeft = timeToStart; // if timeToStart changes
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
Takes in a prop to determine the initial time in milliseconds.

### Props
- `start` (boolean): If true, the countdown starts immediately.
- `pause` (boolean): If true, the countdown pauses.
- `reset` (boolean): If true, the countdown resets to the initial time.
- `timeToStart` (number): The initial time in milliseconds.
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
      max-width: 300px;

      margin: 1rem;
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
