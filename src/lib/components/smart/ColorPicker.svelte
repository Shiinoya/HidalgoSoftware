<script lang="ts">
  import ColorSelect from 'svelte-color-select';

  let dialog: HTMLDialogElement | undefined;
  let colorPicker = $state({ r: 255, g: 255, b: 255 });
  let currentColorHex = $state('');

  function rgbToHex({ r, g, b }: { r: number; g: number; b: number }): string {
    const toHex = (value: number) =>
      Math.round(value * 255)
        .toString(16)
        .padStart(2, '0');

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  $effect(() => {
    currentColorHex = rgbToHex({ r: colorPicker.r, g: colorPicker.g, b: colorPicker.b });
  });
</script>

<!--
@component

## Color Picker
Component for selecting colors.

### Features
Displays a dialog with a color picker that allows users to select a color. Chosen color is displayed in the dialog header and icons.

### Props
- prop_name: prop_description
-->

<div class="component-wrapper">
  <button class="open-close" onclick={() => dialog?.showModal()}>
    <span class="material-symbols-outlined" style={`color: ${currentColorHex}`}>palette</span>
  </button>
</div>

<dialog bind:this={dialog} closedby="any">
  <div class="header">
    <span class="icon material-symbols-outlined" style={`color: ${currentColorHex}`}>palette</span>
    <span class="text-example" style={`color: ${currentColorHex}`}>Pick a color</span>
    <button onclick={() => dialog?.close()}>
      <span class="material-symbols-outlined">close</span>
    </button>
  </div>

  <ColorSelect bind:rgb={colorPicker} />
</dialog>

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
  }

  dialog {
    border: none;

    &::backdrop {
      background: black;
      opacity: 0.5;
    }

    div.header {
      margin-bottom: 0.5rem;

      display: grid;
      align-items: center;
      grid-template-columns: 20% auto 15%;

      span.icon {
        font-size: 3rem;
      }

      span.text-example {
        font-size: 1.5rem;
        font-weight: bold;
      }

      button {
        background: none;
        border: none;
        cursor: pointer;
      }
    }
  }
</style>
