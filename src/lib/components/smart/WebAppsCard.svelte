<script lang="ts">
  import HeroGalleryDisplay from './Hero&GalleryDisplay.svelte';

  type WebApp = {
    name: string;
    description: string;
    company: string;
    heroSrc: string;
    gallerySources: string[];
  };

  const webApps: WebApp[] = [
    {
      name: 'Stargazer Admin',
      company: 'Sedona Stargazing',
      description: 'Admin Dashboard',
      heroSrc: '01_login.png',
      gallerySources: Array.from({ length: 12 }, () => '01_login.png')
    },
    {
      name: 'Stargazing Tour',
      company: 'Sedona Stargazing',
      description: 'Booking calendar & checkout',
      heroSrc: '01_login.png',
      gallerySources: Array.from({ length: 12 }, () => '01_login.png')
    },
    {
      name: 'ActivForce',
      company: 'ActivBody',
      description: 'Admin dashboard',
      heroSrc: '/activforce/02_09_report_v02_chart.png',
      gallerySources: [
        '/activforce/01_05_table_v02.png',
        '/activforce/02_09_report_v02_chart.png',
        '/activforce/03_10_report_v02_illustration.png',
        '/activforce/04_15_report_v02_single_mobile.png',
        '/activforce/05_16_report_v02_double_mobile.png',
        '/activforce/06_13_report_v02_print.png',
        '/activforce/07_08_locale_japanese.png'
      ]
    },
    {
      name: 'ActivElite',
      company: 'ActivBody',
      description: 'Admin dashboard',
      heroSrc: '/activelite/04_exercise_report.png',
      gallerySources: [
        '/activelite/01_select_organization.png',
        '/activelite/02_latest_activities.png',
        '/activelite/03_athletes.png',
        '/activelite/05_strength_over_time.png',
        '/activelite/06_strength_over_time_export.png',
        '/activelite/07_mobile_strength_over_time.png',
        '/activelite/08_mobile_navbar.png'
      ]
    },
    {
      name: 'Account Management',
      company: 'ActivBody',
      description: 'User account management portal',
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
        <li>{webApp.name}</li>
        <li>Company: {webApp.company}</li>
        <br />
        <li>{webApp.description}</li>
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
