<script lang="ts">
  import BusinessCard from '$lib/components/smart/BusinessCard.svelte';
</script>

<title>Moises Hidalgo : Portfolio</title>

<div class="view-wrapper">
  <span class="business-card">
    <BusinessCard />
  </span>

  <div class="portfolio">
    <h2>Portfolio</h2>

    <div class="links">
      <ul>
        <li><a href="/portfolio/web-applications">Web Applications</a></li>
        <li><a href="/portfolio/websites">Websites</a></li>
      </ul>
    </div>
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
      margin-top: 8rem;

      display: flex;
      flex-direction: column;
      align-items: center;

      text-align: center;

      ul {
        padding: 0;
        font-size: 1.1rem;
        font-weight: bold;

        li {
          padding: 0.5em;
          list-style: none;
        }
      }
    }
  }
</style>
