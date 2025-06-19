<script lang="ts">
  import TimerController from '$lib/components/dumb/TimerController.svelte';
  import Countdown from '$lib/components/dumb/Countdown.svelte';

  let start = $state(false);
  let pause = $state(false);
  let reset = $state(false);
  let minutes = 0.1; // initial time in minutes

  function startCountdown() {
    start = true;
    pause = false;
    reset = false;
  }

  function pauseCountdown() {
    start = false;
    pause = true;
    reset = false;
  }

  function resetCountdown() {
    start = false;
    pause = false;
    reset = true;
  }
</script>

<title>Board Game Timer</title>

<div class="view-wrapper">
  <h1>Board Game Timer</h1>
  <Countdown {start} {pause} {reset} {minutes} onEnd={() => pauseCountdown()} />
  <TimerController
    onStart={() => startCountdown()}
    onPause={() => pauseCountdown()}
    onReset={() => resetCountdown()}
  />
</div>

<style lang="scss">
  div.view-wrapper {
    // TODO : make this response
    height: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      text-align: center;
      line-height: 1.2em;
    }
  }
</style>
