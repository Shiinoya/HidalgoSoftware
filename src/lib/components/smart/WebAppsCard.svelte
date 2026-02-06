<script lang="ts">
  import HeroGalleryDisplay from './Hero&GalleryDisplay.svelte';

  type WebApp = {
    name: string;
    type: string;
    company: string;
    heroSrc: string;
    gallerySources: string[];
  };

  const webApps: WebApp[] = [
    {
      name: 'Stargazer Admin',
      type: 'Admin dDashboard',
      company: 'Sedona Stargazing',
      heroSrc: '01_login.png',
      gallerySources: Array.from({ length: 12 }, () => '01_login.png')
    },
    {
      name: 'Stargazing Tour',
      type: 'Booking calendar & checkout',
      company: 'Sedona Stargazing',
      heroSrc: '01_login.png',
      gallerySources: Array.from({ length: 12 }, () => '01_login.png')
    },
    {
      name: 'ActivForce',
      type: 'Admin dashboard',
      company: 'ActivBody',
      heroSrc: '01_login.png',
      gallerySources: Array.from({ length: 12 }, () => '01_login.png')
    },
    {
      name: 'ActivElite',
      type: 'Admin dashboard',
      company: 'ActivBody',
      heroSrc: '01_login.png',
      gallerySources: Array.from({ length: 12 }, () => '01_login.png')
    },
    {
      name: 'Account Management',
      type: 'User account management portal',
      company: 'ActivBody',
      heroSrc: '01_login.png',
      gallerySources: Array.from({ length: 12 }, () => '01_login.png')
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

  {#each webApps as webApp}
    <div class="application">
      <div>
        <HeroGalleryDisplay heroSrc={webApp.heroSrc} gallerySources={webApp.gallerySources} />
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
