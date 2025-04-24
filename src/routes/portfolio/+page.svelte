<script lang="ts">
  import BusinessCard from '$lib/components/smart/BusinessCard.svelte';
  import WebAppsCard from '$lib/components/smart/WebAppsCard.svelte';
</script>

<title>Moises Hidalgo : Portfolio</title>

<div class="view-wrapper">
  <span class="business-card">
    <BusinessCard />
  </span>

  <div class="portfolio">
    <h1>Portfolio</h1>

    <WebAppsCard />
  </div>
</div>

<style lang="scss">
  div.view-wrapper {
    display: flex;
    flex-direction: column;

    span.business-card {
      display: flex;
      justify-content: center;
    }

    div.portfolio {
      margin-top: 5rem;

      display: flex;
      flex-direction: column;
      align-items: center;

      text-align: center;
    }
  }
</style>
