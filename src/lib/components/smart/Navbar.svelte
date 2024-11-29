<script lang="ts">
  import { changeTheme } from '$lib/utils/color-scheme';
</script>

<!--
@component

## Navbar
Component to allow users navigate or adjust their experience.

### Features
feature_description

### Props
- prop_name: prop_description
-->

<div class="navbar-wrapper">
  <button on:click={() => changeTheme()}>Click me to change colors</button>
</div>

<style lang="scss"></style>
