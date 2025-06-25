<script lang="ts">
  import { minutesToMilliseconds } from '$lib/utils/time';

  import TimerSettings from '../dumb/TimerSettings.svelte';
  import TimerController from '$lib/components/dumb/TimerController.svelte';
  import Countdown from '$lib/components/dumb/Countdown.svelte';

  let timeToStart = $state(.10); // in minutes

  let start = $state(false);
  let pause = $state(false);
  let reset = $state(false);

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

  // TODO : would be nice to add a way to reset (all buttons disappear except reset?)
  function endCountdown() {
    start = false;
    pause = false;
    reset = false;
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

<div class="component-wrapper">
  <TimerSettings bind:timeToStart />
  <Countdown
    {start}
    {pause}
    {reset}
    timeToStart={minutesToMilliseconds(timeToStart)}
    onEnd={() => endCountdown()}
  />
  <TimerController
    onStart={() => startCountdown()}
    onPause={() => pauseCountdown()}
    onReset={() => resetCountdown()}
  />
</div>

<style lang="scss"></style>
