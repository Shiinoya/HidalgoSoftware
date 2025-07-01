<script lang="ts">
  import type { Player } from '$lib/stores/players.svelte';
  import ColorPicker from './ColorPicker.svelte';

  let player: Player = $state({
    name: 'Player',
    time: 0,
    icon: undefined,
    color: 'white'
  });
</script>

<!--
@component

## Player Card
component_description

### Features
feature_description

### Props
- prop_name: prop_description
-->

<div class="component-wrapper">
  <div class="name-color">
  <span>Player Name:<input value={player.name} /></span>
  <ColorPicker />
</div>
  <span>Player Time:<input value={player.time} type="number" /></span>
  <span>Player Icon:<input value={player.icon} /></span>
</div>

<style lang="scss">
  div.component-wrapper {
    max-width: 400px;

    padding: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    // this color should match the color of the icon in ColorPicker
    border: 1px solid rgba(198, 145, 247, 0.9);
    border-radius: 20px;

    input {
      margin-left: 1rem;
    }

    .name-color {
      display: flex;
      gap: 2rem;
    }
  }
</style>
