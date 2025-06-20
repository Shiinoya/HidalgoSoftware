<script lang="ts">
  import Timer from '$lib/components/smart/Timer.svelte';

  let timers = [];
</script>

<title>Board Game Timer</title>

<div class="view-wrapper">
  
  <h1>Board Game Timer</h1>
  <button onclick={() => (timers = [...timers, Timer])}>Add timer</button>

  <div class="timers-wrapper">
    {#each timers as timer}
      <svelte:component this={timer} />
    {/each}
  </div>
</div>

<style lang="scss">
  div.view-wrapper {
    // TODO : make this responsive

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      text-align: center;
      line-height: 1.2em;
    }

    div.timers-wrapper {
      display: grid;
      grid-template-columns: repeat(3, auto);
      grid-template-rows: repeat(3, auto);
    }
  }
</style>
