<script lang="ts">
  type WebApp = {
    name: string;
    type: string;
  };

  const webApps: WebApp[] = [
    {
      name: 'ActivForce',
      type: 'Dashboard'
    },
    {
      name: 'ActivElite',
      type: 'Dashboard'
    }
  ];
</script>

<title>Hidalgo : Web Applications</title>

<div class="view-wrapper">
  <h2>Web Applications</h2>

  <ul>
    {#each webApps as webApp}
      <li>Name: {webApp.name}</li>
      <li>Type: {webApp.type}</li>
    {/each}
  </ul>
</div>

<style lang="scss">
  div.view-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

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
</style>
