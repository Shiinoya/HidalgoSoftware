<script lang="ts">
  import ImageDisplay from './ImageDisplay.svelte';

  type WebApp = {
    name: string;
    type: string;
    company: string;
  };

  const webApps: WebApp[] = [
    {
      name: 'ActivForce',
      type: 'Dashboard',
      company: 'ActivBody'
    },
    {
      name: 'ActivElite',
      type: 'Dashboard',
      company: 'ActivBody'
    },
    {
      name: 'Account Management',
      type: 'UI Portal',
      company: 'ActivBody'
    }
  ];
</script>

<!--
@component

## Web Applications Card
Shows a list of web applications.

### Features
feature_description
-->

<div class="web-apps-card-wrapper">
  <h2>Web Applications</h2>

  <!-- // TODO : create grid for layout to include images -->

  {#each webApps as webApp}
    <div class="application">
      <div class="image">
        <ImageDisplay src="/01_login.png" />
      </div>

      <ul>
        <li>Name: {webApp.name}</li>
        <li>Type: {webApp.type}</li>
        <li>Company: {webApp.company}</li>
        <br />
        <br />
      </ul>
    </div>
  {/each}
</div>

<style lang="scss">
  div.web-apps-card-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    div.application {
      margin: 2rem 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;

      ul {
        padding: 0;
        font-size: 1.1rem;
        font-weight: bold;

        li {
          padding: 0.5em;
          list-style: none;

          text-align: left;
        }
      }
    }
  }
</style>
