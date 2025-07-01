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
  <span>Player Name:<input value={player.name} /></span>
  <span>Player Time:<input value={player.time} type="number" /></span>
  <span>Player Icon:<input value={player.icon} /></span>
  <span>Player Color:<input value={player.color} /></span>
  <ColorPicker />
</div>

<style lang="scss">
  div.component-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      margin-left: 1rem;
    }
  }
</style>
