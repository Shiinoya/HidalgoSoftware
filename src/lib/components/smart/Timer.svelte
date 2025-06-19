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

<!--
@component

## component_name
component_description

### Features
feature_description

### Props
- prop_name: prop_description
-->

<div>
  <Countdown {start} {pause} {reset} {minutes} onEnd={() => pauseCountdown()} />
  <TimerController
    onStart={() => startCountdown()}
    onPause={() => pauseCountdown()}
    onReset={() => resetCountdown()}
  />
</div>

<style lang="scss"></style>
