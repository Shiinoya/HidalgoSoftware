<script lang="ts">
  import ColorSelect from 'svelte-color-select';

  let rgb = { r: 0.4, g: 0.2, b: 0.6 };

  function formatRGB(value: number): number {
    return Math.round(value * 255);
  }
</script>

<!--
@component

## Color Picker
component_description

### Features
feature_description

### Props
- prop_name: prop_description
-->

<title></title>

<div>
  <ColorSelect bind:rgb />

  <div>
    {formatRGB(rgb.r)} {formatRGB(rgb.g)} {formatRGB(rgb.b)}
  </div>
</div>

<style lang="scss"></style>
