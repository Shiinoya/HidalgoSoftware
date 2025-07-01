<script lang="ts">
  import ColorSelect from 'svelte-color-select';

  let showColorPicker = $state(false);

  let rgb = $state({ r: 0.4, g: 0.2, b: 0.6 });

  let currentColor = $state({
    r: 255,
    g: 255,
    b: 255
  });

  function formatRGB(value: number): number {
    return Math.round(value * 255);
  }

  $effect(() => {
    currentColor = {
      r: formatRGB(rgb.r),
      g: formatRGB(rgb.g),
      b: formatRGB(rgb.b)
    };
  });
</script>

<!--
@component

## Color Picker
Component for selecting colors.

### Features
Allows user to select a color using a drag and drop. The selected color is displayed as the icon's color.

### Props
- prop_name: prop_description
-->

<div class="component-wrapper">
  <button class="open-close" onclick={() => (showColorPicker = !showColorPicker)}>
    <span
      class="material-symbols-outlined"
      style={`color: rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`}
    >
      palette
    </span>
  </button>

  <div class="color-picker" class:showColorPicker>
    <ColorSelect bind:rgb />
  </div>
</div>

<style lang="scss">
  div.component-wrapper {
    button.open-close {
      background: none;
      border: none;
      cursor: pointer;

      span {
        font-size: 3rem;
      }
    }

    div.color-picker {
      display: none;

      &.showColorPicker {
        display: block;
        position: absolute;
        top: 0;
        left: 0;

        background: black;
      }
    }
  }
</style>
