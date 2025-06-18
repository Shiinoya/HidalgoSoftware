<script lang="ts">
  import TimerController from '$lib/components/dumb/TimerController.svelte';
  import Countdown from '$lib/components/dumb/Countdown.svelte';

  let start = $state(false);
  let pause = $state(false);
  let reset = $state(false);
  let minutes = 1.5; // Initial time in minutes
</script>

<title>Board Game Timer</title>

<div class="view-wrapper">
  <h1>Board Game Timer</h1>
  <Countdown {start} {pause} {reset} {minutes} />
  <TimerController
    onStart={() => (start = true)}
    onPause={() => (pause = true)}
    onReset={() => (reset = true)}
  />
  {start}
  {pause}
  {reset}
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
