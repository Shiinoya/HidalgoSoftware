<script lang="ts">
  import type { Component } from 'svelte';

  import Timer from '$lib/components/smart/Timer.svelte';

  // reset this to [];
  let timers: Component[] = [Timer];
</script>

<title>Board Game Timer</title>

<div class="view-wrapper">
  <h1>Board Game Timer</h1>

  <button class="add-timer" onclick={() => (timers = [...timers, Timer])}>
    <span class="material-symbols-outlined">add</span>
    <span class="material-symbols-outlined">hourglass</span>
  </button>

  <div class="timers-wrapper">
    {#each timers as timer}
      <svelte:component this={timer} />
    {/each}
  </div>
</div>

<style lang="scss">
  div.view-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      text-align: center;
      line-height: 1.2em;
    }

    button.add-timer {
      margin: 2rem;
      padding: 1em 1em;

      background: none;
      border: solid 2px white;
      border-radius: 20px;

      cursor: pointer;
    }

    div.timers-wrapper {
      display: flex;
      flex-direction: column;
    }
  }

  @media (min-width: 800px) {
    div.view-wrapper {
      div.timers-wrapper {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(2, auto);
      }
    }
  }
</style>
