<script lang="ts">
  let { onStart, onPause, onReset } = $props();
</script>

<!--
@component

## Timer Controller
component_description

### Features
feature_description

### Props
- prop_name: prop_description
-->

<div class="component-wrapper">
  <button onclick={() => onStart?.()}>
    <span class="material-symbols-outlined">play_arrow</span>
  </button>
  <button onclick={() => onPause?.()}>
    <span class="material-symbols-outlined">pause</span>
  </button>
  <button onclick={() => onReset?.()}>
    <span class="material-symbols-outlined">stop</span>
  </button>
</div>

<style lang="scss">
  div.component-wrapper {
    margin: 1em 0;

    button {
      margin: 1em 2em;
      padding: 0.5em;

      color: white;
      font-size: 1em;

      background: none;
      border: none;

      cursor: pointer;
    }
  }
</style>
