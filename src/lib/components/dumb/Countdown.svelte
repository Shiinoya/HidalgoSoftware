<script lang="ts">
  let { start = false, pause = false, reset = false, timeToStart = 60000, onEnd } = $props();

  let timeLeft = $state(timeToStart);
  let timeOnPause = $state(0);

  let timer: ReturnType<typeof setInterval> = 0;

  function runTimer() {
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft -= 1000; // decrease by 1000 milliseconds
      } else {
        onEnd?.();
        clearTimer();
      }
    }, 1000);
  }

  function clearTimer() {
    clearInterval(timer);
    timer = 0;
  }

  function tapToHandle() {
    if (timer === 0) {
      startCountdown();
    } else {
      pauseCountdown();
    }

    // TODO : if multiple timers, switch to the next timer and start it
  }

  function startCountdown() {
    // if timer is already running, do nothing
    if (timer != 0) return;

    // if timer is paused, resume from the paused time
    if (timeOnPause > 0) {
      timeLeft = timeOnPause;
      timeOnPause = 0;
    }

    runTimer();
  }

  function pauseCountdown() {
    timeOnPause = timeLeft;
    clearTimer();
  }

  function resetCountdown() {
    timeLeft = timeToStart; // reset to initial time
    timeOnPause = 0;
    clearTimer();

    // TODO : visibly show how to reset the timer
  }

  $effect(() => {
    if (!start && !pause) timeLeft = timeToStart; // if timeToStart changes
    if (start) startCountdown();
    if (pause) pauseCountdown();
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
  <button onclick={() => tapToHandle()}>
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
