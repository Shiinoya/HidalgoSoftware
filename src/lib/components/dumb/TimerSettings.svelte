<script lang="ts">
  let { timeToStart = $bindable() } = $props();
</script>

<!--
@component

## Timer Settings
Component to adjust timer settings.

### Features
Allows for initial time in minutes.

### Props
- `timeToStart` (number): Initial time in minutes, bound to the parent component.
-->

<div class="component-wrapper">
  Time to start: <input type="number" bind:value={timeToStart} />
</div>

<style lang="scss">
  div.component-wrapper {
    margin: 1em 0;

    display: flex;
    justify-content: center;
    align-items: center;

    input {
      height: 30px;
      width: 50px;

      margin: 0 1em;

      color: white;
      font-size: 1rem;

      background: rgb(66, 65, 65);
      border: none;
    }
  }
</style>
