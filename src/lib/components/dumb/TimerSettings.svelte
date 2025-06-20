<script lang="ts">
  let { timeToStart = $bindable() } = $props();
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
