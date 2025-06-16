<script lang="ts">
  import Countdown from './Countdown.svelte';
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

<title>Board Game Timer</title>

<div class="view-wrapper">
  <h1>Board Game Timer</h1>
  <Countdown minutes={1} />
</div>

<style lang="scss">
  div.view-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
