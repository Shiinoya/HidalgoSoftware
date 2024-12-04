<script lang="ts">
  import Navbar from '$lib/components/smart/Navbar.svelte';

  import '../app.scss';
</script>

<div class="layout-wrapper">
  <header>
    <Navbar />
  </header>

  <main>
    <slot />
  </main>
</div>

<style lang="scss">
  div.layout-wrapper {
    height: 100vh;
    display: grid;
  }
</style>
