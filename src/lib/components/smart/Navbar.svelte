<script lang="ts">
  import { changeTheme } from '$lib/utils/color-scheme';
  import { handleLocalStorage } from '$lib/utils/localStorage.svelte';

  // TODO -- this needs to be set on mount so the correct icon shows up
  let theme = $state();

  const changeCurrentTheme = () => {
    changeTheme();
    theme = handleLocalStorage('theme');
  };
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
  <button onclick={() => changeCurrentTheme()}>
    {#if theme === 'dark'}
      <span class="material-symbols-outlined">light_mode</span>
    {:else}
      <span class="material-symbols-outlined">dark_mode</span>
    {/if}
  </button>
</div>

<style lang="scss">
  div.navbar-wrapper {
    display: flex;
    justify-content: flex-end;

    background-color: var(--orange-900);

    button {
      padding: 0.5rem;
      background: none;
      border: none;
    }
  }
</style>
